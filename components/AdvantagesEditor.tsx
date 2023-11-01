'use client';

import {Button} from './shared/Button/Button';
import {Fetcher} from '../utils/Fetcher';
import {TextInput} from './shared/TextInput';
import {Textarea} from './shared/Textarea';
import {Join} from './shared/Join';
import {Divider} from './shared/Divider';
import React, {useEffect, useState} from 'react';
import {IAdvantageData} from '../types/IAdvantage';
import {InfoCard} from './shared/InfoCard';
import {Card} from './shared/Card';
import {Popover} from './shared/Popover';
import {Cross as CrossIcon} from './shared/Icons/Cross';
import {Loading} from './shared/Loading';

export const AdvantagesEditor = () => {
  const [englishTitle, setEnglishTitle] = useState('');
  const [czeckTitle, setCzeckTitle] = useState('');

  const [englishDesc, setEnglishDesc] = useState('');
  const [czeckDesc, setCzeckDesc] = useState('');

  const [loading, setLoading] = useState(false);

  const [advantagesList, setAdvantagesList] = useState<IAdvantageData[]>([]);

  const fetcher = new Fetcher();

  const pushAdvantage = async () => {
    try {
      setLoading(true);

      await fetcher.post(
        'api/advantage',
        {
          en: {
            title: englishTitle,
            desc: englishDesc
          },
          cz: {
            title: czeckTitle,
            desc: czeckDesc
          }
        });
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getAdvantages = async () => {
    try {
      setLoading(true);

      const advantagesResponse = await fetcher.get<{ advantages: IAdvantageData[] }>('api/advantage');

      setAdvantagesList(advantagesResponse?.advantages ?? []);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAdvantage = async (advantageId: string) => {
    try {
      setLoading(true);

      await fetcher.delete(`api/advantage?advantageId=${advantageId}`)
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addAdvantageClickHandler = async () => {
    await pushAdvantage();

    getAdvantages();
  };

  const deleteClickHandler = async (advantageId: string) => {
    await deleteAdvantage(advantageId);

    getAdvantages();
  };

  useEffect(() => {
    getAdvantages();
  }, []);

  return (
    <section className='relative'>
      {loading && <Loading />}

      <article className='mb-5'>
        <ul className='list-none flex gap-4 max-w-6xl overflow-x-auto py-5'>
          {
            advantagesList
              .sort(({index: index1}, {index: index2}) => index1 - index2)
              .map((advantage, key) => (
              <li key={key}>
                <Popover
                  horizontal={'center'}
                  element={(
                    <Button
                      onClick={() => deleteClickHandler(advantage.advantageId)}
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
                    <InfoCard title={advantage.en.title}>
                      {advantage.en.desc}
                    </InfoCard>
                  </Card>
                </Popover>
              </li>
            ))
          }
        </ul>
      </article>

      <article className='flex flex-col items-center'>
        <Join
          design={'vertical'}
          items={[
            <TextInput
              placeholder={'Advantage english title'}
              value={englishTitle}
              onChange={({target}) => setEnglishTitle(target.value)}
              key={1}
            />,

            <TextInput
              placeholder={'Advantage czeck title'}
              value={czeckTitle}
              onChange={({target}) => setCzeckTitle(target.value)}
              key={2}
            />
          ]}
        />

        <Divider color={'orange'}/>

        <Join
          items={[
            <Textarea
              placeholder={'Advantage english description'}
              value={englishDesc}
              onChange={({target}) => setEnglishDesc(target.value)}
              key={1}
            />,
            <Textarea
              placeholder={'Advantage czeck description'}
              value={czeckDesc}
              onChange={({target}) => setCzeckDesc(target.value)}
              key={2}
            />
          ]}
        />

        <Button styleType={'secondary'} onClick={addAdvantageClickHandler}>Add advantage</Button>
      </article>
    </section>
  );
};
