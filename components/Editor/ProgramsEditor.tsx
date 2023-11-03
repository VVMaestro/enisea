'use client';

import {Join} from '../shared/Join';
import {TextInput} from '../shared/TextInput';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {Divider} from '../shared/Divider';
import {Textarea} from '../shared/Textarea';
import {Button} from '../shared/Button/Button';
import {Fetcher} from '../../utils/Fetcher';
import {Uploader} from '../shared/Uploader';
import {AsyncFileReader} from '../../utils/AsyncFileReader';
import {Loading} from '../shared/Loading';
import {IProgramData} from '../../types/IProgram';
import {Popover} from '../shared/Popover';
import {Cross as CrossIcon} from '../shared/Icons/Cross';
import {Card} from '../shared/Card';
import {ProgramItem} from '../ProgramItem';

export const ProgramsEditor = () => {
  const [englishTitle, setEnglishTitle] = useState('');
  const [czeckTitle, setCzeckTitle] = useState('');

  const [englishDesc, setEnglishDesc] = useState('');
  const [czeckDesc, setCzeckDesc] = useState('');

  const [file, setFile] = useState<File>();

  const [programs, setPrograms] = useState<IProgramData[]>([]);

  const [loading, setLoading] = useState(false);

  const fetcher = new Fetcher();

  const getPrograms = async () => {
    setLoading(true);

    const programsResponse = await fetcher.get<{programs: IProgramData[]}>('/api/program');

    setPrograms(programsResponse?.programs ?? []);

    setLoading(false);
  };

  const pushProgram = async (iconURL: string) => {
    try {
      setLoading(true);

      await fetcher.post(
        'api/program',
        {
          iconURL,
          en: {
            title: englishTitle,
            desc: englishDesc
          },
          cz: {
            title: czeckTitle,
            desc: czeckDesc
          }
        }
      );
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addProgramClickHandler = async () => {
    try {
      setLoading(true);

      if (!file) {
        console.warn('Program icon file is not found');

        return;
      }

      const iconURL = await new AsyncFileReader().readFile(file);

      if (typeof iconURL !== 'string') {
        console.warn('Program icon file is not found');

        return;
      }

      await pushProgram(iconURL);
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);

      await getPrograms();
    }
  };

  const onFileChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    if (file) {
      setFile(file);
    }
  };

  const onDeleteProgramHandler = async (programId: string) => {
    setLoading(true);

    await fetcher.delete(`api/program?programId=${programId}`);

    setLoading(false);

    await getPrograms();
  };

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <section>
      {loading && <Loading />}

      <ul className='list-none flex gap-4 max-w-6xl overflow-x-auto py-5 mb-5'>
        {
          programs
            .sort(({index: index1}, {index: index2}) => index1 - index2)
            .map(({index, iconURL, programId, en}) => (
              <li key={index}>
                <Popover
                  horizontal={'center'}
                  element={(
                    <Button
                      onClick={() => onDeleteProgramHandler(programId)}
                      size={'xs'}
                      circle
                      styleType={'secondary'}
                      className='-ml-3'
                    >
                      <CrossIcon />
                    </Button>
                  )}
                >
                  <Card design={'compact'} bordered>
                    <ProgramItem
                      imgSrc={iconURL}
                      title={en.title}
                      desc={en.desc}
                      isActionable={false}
                    />
                  </Card>
                </Popover>
              </li>
            ))
        }
      </ul>

      <article className='flex flex-col items-center'>
        <Join
          design={'vertical'}
          items={[
            <TextInput
              placeholder={'Program english title'}
              value={englishTitle}
              onChange={({target}) => setEnglishTitle(target.value)}
              key={1}
            />,

            <TextInput
              placeholder={'Program czeck title'}
              value={czeckTitle}
              onChange={({target}) => setCzeckTitle(target.value)}
              key={2}
            />
          ]}
        />

        <Divider color={'sky'}/>

        <Join
          items={[
            <Textarea
              placeholder={'Program english description'}
              value={englishDesc}
              onChange={({target}) => setEnglishDesc(target.value)}
              key={1}
            />,
            <Textarea
              placeholder={'Program czeck description'}
              value={czeckDesc}
              onChange={({target}) => setCzeckDesc(target.value)}
              key={2}
            />
          ]}
        />

        <Divider color={'sky'} />

        <Uploader onChange={onFileChangeHandler} />

        <Divider color={'sky'} />

        <Button styleType={'secondary'} onClick={addProgramClickHandler}>Add program</Button>
      </article>
    </section>
  );
};
