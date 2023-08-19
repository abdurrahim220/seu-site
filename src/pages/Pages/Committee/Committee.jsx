import React, { useEffect, useState } from 'react'
import PageBanner from '../../Shared/PageBanner/PageBanner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCommittee from '../../../hooks/useCommittee';
import CommitteeCard from './CommitteeCard';

const Committee = () => {
  const [committee] = useCommittee();
  // console.log(committee)

  const cseClub = committee.filter(data => data.clubName === "ComputerClub")
  const eeeClub = committee.filter(data => data.clubName === "EEEClub")
  const debateClub = committee.filter(data => data.clubName === "DebateClub")
  // console.log(cseClub)

  return (
    <div>
      <PageBanner />

      <div>
        <Tabs>
          <TabList>
            <Tab>Computer Club</Tab>
            <Tab>EEE Club</Tab>
            <Tab>Debate Club</Tab>
          </TabList>

          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 container mx-auto'>
              {
                cseClub.map(item => <CommitteeCard key={item._id} item={item} />)
              }

            </div>
          </TabPanel>
          <TabPanel>
            <div className=''>
              {
                eeeClub.map(item => <CommitteeCard key={item._id} item={item} />)
              }

            </div>
          </TabPanel>
          <TabPanel>
            <div className=''>
              {
                debateClub.map(item => <CommitteeCard key={item._id} item={item} />)
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>

    </div>
  )
}

export default Committee