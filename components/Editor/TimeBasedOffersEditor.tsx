'use client';

import {Join} from '../shared/Join';
import {TextInput} from '../shared/TextInput';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {Divider} from '../shared/Divider';
import {Uploader} from '../shared/Uploader';
import {Fetcher} from '../../utils/Fetcher';
import {ITimeBasedOffer} from '../../types/ITimeBasedOffer';
import {AsyncFileReader} from '../../utils/AsyncFileReader';
import {Button} from '../shared/Button/Button';
import {Loading} from '../shared/Loading';
import {Popover} from '../shared/Popover';
import {Cross as CrossIcon} from '../shared/Icons/Cross';
import {Card} from '../shared/Card';
import {TimeBasedOfferItemView} from '../TimeBasedOfferItemView';
import {LANGUAGE} from '../../consts';

export const TimeBasedOffersEditor = () => {
  const [cost, setCost] = useState('');
  const [time, setTime] = useState('');
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState<ITimeBasedOffer[]>([]);

  const fetcher = new Fetcher();

  const getOffers = async () => {
    setLoading(true);

    const offersResponse = await fetcher.get<{offers: ITimeBasedOffer[]}>('/api/timeBasedOffer');

    setOffers(offersResponse?.offers ?? []);

    setLoading(false);
  };

  const pushOffer = async (photoURL: string) => {
    setLoading(true);

    await fetcher.post(
      '/api/timeBasedOffer',
      {
        cost,
        time,
        photoURL
      }
    );

    setLoading(false);
  };

  const addOfferClickHandler = async () => {
      setLoading(true);

      if (!file) {
        console.warn('Offer photo file is not found');

        return;
      }

      const photoURL = await new AsyncFileReader().readFile(file);

      if (typeof photoURL !== 'string') {
        console.warn('Offer photo file is not found');

        return;
      }

      await pushOffer(photoURL);

      setLoading(false);

      await getOffers();
  };

  const onDeleteOfferHandler = async (offerId: string) => {
    setLoading(true);

    await fetcher.delete(`/api/timeBasedOffer?offerId=${offerId}`);

    setLoading(false);

    await getOffers();
  };

  const onFileChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    if (file) {
      setFile(file);
    }
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <section>
      {loading && <Loading />}

      <ul className='list-none flex gap-4 max-w-6xl overflow-x-auto py-5 mb-5'>
        {
          offers
            .sort(({index: index1}, {index: index2}) => index1 - index2)
            .map(({index, photoURL, offerId, cost, time}) => (
              <li key={index}>
                <Popover
                  horizontal={'center'}
                  element={(
                    <Button
                      onClick={() => onDeleteOfferHandler(offerId)}
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
                    <TimeBasedOfferItemView
                      cost={cost}
                      time={time}
                      imageSrc={photoURL}
                      compact={true}
                      lang={LANGUAGE.EN}
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
              placeholder={'The Offer Cost'}
              value={cost}
              onChange={({target}) => setCost(target.value)}
              key={1}
            />,

            <TextInput
              placeholder={'The Offer Time'}
              value={time}
              onChange={({target}) => setTime(target.value)}
              key={2}
            />
          ]}
        />

        <Divider color={'sky'}/>

        <Uploader onChange={onFileChangeHandler}/>

        <Divider color={'sky'}/>

        <Button
          styleType={'secondary'}
          onClick={addOfferClickHandler}
        >
          Add offer
        </Button>
      </article>
    </section>
  );
};
