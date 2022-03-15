import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { NewsDay } from '../components/News/NewsDay';
import MainNews from './../components/News/MainNews';
import SingleNews from './../components/News/SingleNews';
import Yangilik from './../components/News/Yangilik';
import Ishjoy from './../components/News/Boshishjoy';
import Job from '../components/News/Job';
import Tadbirlar from './../components/News/Tadbirlar';
import { Measure } from '../components/News/Measure';
import Elonlar from './../components/News/Elonlar';
import { Advertisement } from '../components/News/Advertisement';
const NewsPage = () => {
          return (
                    <Routes>
                              <Route path='news' element={<MainNews />} />
                              <Route path='/newsSingilur' element={<SingleNews />} />
                              <Route path='/news/day' element={<><Yangilik /><NewsDay /></>} />
                              <Route path='/news/job' element={<><Ishjoy /> <Job /></>} />
                              <Route path='/news/measure' element={<><Tadbirlar /> <Measure />  </>}
                              />
                              <Route path='news/advertisement' element={<>   <Elonlar />  <Advertisement />  </>} />
                    </Routes>
          );
};
export default NewsPage;