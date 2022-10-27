import * as React from 'react';
import { Suspense } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import useQualification from '../Hooks/useQualification';
import Footer from '../Components/atom/Footer';
import SideBar from '../Components/sidebar/Sidebar';

import config from '../config.json';

import MainView from './MainView';
import NotFound from '../Views/NotFound';
import SpecificView from './SpecificView';

export default function Dashboard() {
  const location = useLocation();

  const [targetWebsite, setTargetWebsite] = React.useState(
    location.state?.targetWebsite || localStorage.getItem('targetWebsite') || ''
  );

  const [requestNewVal, setRequestNewVal] = React.useState(
    location.state?.requestNewVal || false
  );

  const [targetWebsiteScore, setTargetWebsiteScore] = React.useState([]);

  let [status, classification, robot, recentRequestedDate] = useQualification(
    targetWebsite,
    requestNewVal
  );

  React.useEffect(() => {
    if (status === 'success' && targetWebsiteScore.length === 0) {
      const newTargetScore = classification.map(
        (criteria) => criteria.resultScore
      );
      newTargetScore.push(
        newTargetScore.reduce((acc, cur) => {
          return acc + cur;
        }, 0) / 4
      );
      setTargetWebsiteScore(newTargetScore);
    } else if (status === 'error') {
      // navigate("/");
    }
  }, [status]);

  React.useEffect(() => {
    if (status === 'success') {
      localStorage.setItem(
        targetWebsite,
        JSON.stringify({
          classification: classification,
          robot: robot,
        })
      );
    }
  }, [status, classification]);

  React.useEffect(() => {
    if (targetWebsite !== '') {
      localStorage.setItem('targetWebsite', targetWebsite);
    }
  }, [targetWebsite]);

  const openView = '/dashboard/' + useParams()['*'];

  return (
    <div className='flex flex-row flex-wrap h-full w-screen bg-main'>
      <SideBar
        targetWebsite={targetWebsite}
        classification={classification}
        openView={openView}
        recentRequestedDate={recentRequestedDate}
      />
      <div className='flex-12 flex-col flex-wrap pt-8 bg-main'>
        <div className='bg-white rounded-2xl px-24'>
          <Routes>
            <Route
              path='/'
              element={
                <MainView
                  id='main'
                  classification={classification}
                  status={status}
                  targetWebsite={targetWebsite}
                  targetWebsiteScore={targetWebsiteScore}
                />
              }
            />
            <Route
              path='/compatibility'
              element={
                <SpecificView
                  status={status}
                  criteriaClass={classification[0]}
                  title={config.evaluation[0]}
                />
              }
            />
            <Route
              path='/accessibility'
              element={
                <SpecificView
                  status={status}
                  criteriaClass={classification[1]}
                  title={config.evaluation[1]}
                />
              }
            />

            <Route
              path='/openness'
              element={
                <SpecificView
                  status={status}
                  criteriaClass={classification[2]}
                  title={config.evaluation[2]}
                  robot={robot}
                />
              }
            />
            <Route
              path='/connectivity'
              element={
                <SpecificView
                  status={status}
                  criteriaClass={classification[3]}
                  title={config.evaluation[3]}
                />
              }
            />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
