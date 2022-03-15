import React,{useState,useEffect} from "react";
import style from "./News/Map.module.css"
import img1 from "./News/Imgs/icon_41.png"
import RoomIcon from '@material-ui/icons/Room';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Map2 = () => {
  useEffect(() => {
    AOS.init();
})
   const [state, setstate] = useState("Andijon");
   const map3=[
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Buhoro",id:"UZB354", url:"M533.4 482.1l-2.7 2.1-5.8 5.8-0.7 0.6-0.7 0.3-0.6-0.1-0.7 0.1-0.4 0.2-0.4 0.3-4.4 4.8-0.5 0.8-0.4 0.6-0.1 0.4 0 0.4 0.1 0.4 0.1 0.3 0.3 0.7 0.4 0.6 1.8 2.3 0.2 0.3 0.2 0.3 0 0.5-0.1 0.6-0.3 0.3-0.3 0.2-9.7 3.5-3.1 1.1-8 3.3-2.7 1.8-5.3 5.9-0.9 0.9-1.8-2.3-1.4-0.8-1.7 0.2-4.5 2.2-1.5 0.4-1.7-0.4-1.8-0.9-9.3-6.7-8.1-5.8-6.5-4.6-3.5-3.7-6.2-8.7-3.7-3.6-8.1-5.7-19.2-13.7-9.4-6.8-7.9-5.7-6.8-4.8-3.4-3.4-0.6-0.4-4.2-5.3-0.6-2-1-4.3-0.2-1.7 0.2-1.6 0.5-1.4 0.3-1.4-0.2-1.6-1.8-3.9-0.2-1.6 0-2-0.3-1.5-0.4-1.4-1.5-3-0.4-1.4-0.2-3.2-0.5-0.7-4.8-2.8-2.8-0.8-1.3-1-0.2-0.5 12.1-15.1 3-6.5-0.7-2.6-1.9-2.9-9.5-10.7 13.1-6.3 0-1.1-16.5-23 20.6-7.8 4.9 0.1 1.8 4.3 1.5 2.5 9.7 11.6 7.9 13.9 1.4 0.8 5.1 1.1 7.6 3 9 5.1 17.5 10.8 1.3 2.3 2.1 2.1-0.1 1.5 7-2.4 4.1-6.2 3.5-7.2 1-1.5 1.1-1 1.2-0.4 1.1 0.3 1.1 1 1.2 1.8 0.3 2.6 0.1 5 0.8 1.7 2.5 0.9 15.7 1.9 1.3-1.3 1.8-6.8 1.1-0.6 2-0.8 7.7-0.3 2.5-0.5 1.9-0.8 1.8-2.7 0.7 0.1 0.5 1.8 1.3 7.8 0.5 2 0.8 2.3 2 1.6 2 1.2 5.8 1.4 17.6 1.2 2.8-0.8-1.4 4.8-0.3 1.9-0.1 2 0 1.9 0.1 1.6 0.3 0.9-0.1 0.9-0.8-0.1-3-0.6-0.6-0.1-0.5 0.2-0.5 0.4-0.6 1-0.1 0.9-1.6 4.9-1.3 1.5-1 1-1.3 4.2-0.7 1.3-6.8-0.1-1.3-0.4-1.3-0.9-1.1-1-1.2-0.3-1.3 0-2 0.3-1 0.6-0.5 0.6-0.2 0.7-0.1 0.8 0 0.6 0.3 1.5 1.5 1.5-1 2.8-0.5 0.5-0.3 0.1 0 0.2 0.1 0.3 0.6 1.1 1.7 1.7 0.9 1.2 0.3 0.5-0.1 0.2-1.7 0.2-0.4 0.1-0.4 0.3-0.4 0.3-0.6 0.1-0.8 0.7-2.8 5.6-0.8 1.1-1 1-1.1 0.8-3.5 1.6-0.5 1-0.4 0.5-0.2 0.3-1.9 2.4-1 2.1-0.8 1.9 0.9 1.9 4.2 5.9 1.7 1.1 2.7 1.5 0.1 0.4 0.3 0.7 0.2 0.6 0.8 0.5 1.1 0 2.5-1.1 0.9 0.1 0.5 0.9 7 3.3 1 1.7 0.5 1.7 0 1.3 0.2 1.6 0.5 1.6 1.1 0.6 1.4 0.5 0.9 0.5 1 1.1 0.9 1.2 0.3 0.5 0.3 0.8 0.6 2 0.1 0.5 0.1 2.1z",
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Xorazm",id:"UZB356", url:"M365 365.3l9.5 10.7 1.9 2.9 0.7 2.6-3 6.5-12.1 15.1-0.1-0.1-0.5-1.8-0.3-0.7-2.2-2.9-0.8-1.6-1.2-4.7-0.7-1.1-1.9-2.1-0.6-1-0.5-1.6-0.6-3.5-1.9-6.5-0.6-1.5 0.4-0.6-0.3-1.1-0.1-5.4-0.2-1.6-0.5-1.3-4.3-7.2-1.1-1.2-13-9.6-5-2.2-5.7-1.5-2.1-0.3-1.3 0.7-0.8 1.6-0.6 2.7-1.4 0.8-1.1 2.5-1.7 1.8-2 1-2.2 0.1-2.3-1-6-4.3-1.1 0-3.4 0.6-0.3-0.7-0.2-0.7-0.2-0.2-1.1 1.9-0.4 0.4-0.4 0.4-2.8-2.9-4-1-11.7 0.7-7.1 2.4-3.5 0-2-0.5-1.6-1.2-3.2-3.2-3.5-2.6-5.6-2.9-6.4-3.3-1.6-1.6-0.4-1.8 0.7-6.3 0.5-1.3 0.7-1.1 1-0.9 2.4-1.2 0.8-0.9-0.5-1.5-3.9-5.5-1.7-3.4-0.6-2.8 1.5-2.1 1.6-1.1 1.8-0.2 2.2 0.7 2 1.3 1.2 0.5 0.9-0.1 0.6-1-0.1-1.1-0.5-1.1-0.7-0.9-0.8-0.7-2.8-1.7-0.9-0.9-0.6-1 0.7-0.7 0.6-1.8-0.1-0.8-0.6-1.4-0.2-0.3-0.1-0.4 0.2-0.3 0.4-0.3 0.9-0.2 1.6-0.1 1.2-0.5 3-2.1 1.1-1 0.3-0.2 1-0.1 1.2 0.9 0.6 0.4 2.9 0.7 2.9 0.3 0.8 0.7 0.2 1.6 0 3.5 0.5 1.3 1.5 2.4 0.7 2 1.6 2.9 0.8 1.1 1 0.7 1.3 0.3 2.7 0 1 0.6 0.6 1.3 1 3 1.5 2.7 1.9 2.1 13.7 12.5 1.5 0.3 0.8 0.3 0.6 0.5 2.1 2.3 1.8 1.7 1.3 0.5 3.4 0.6 1.1 0.7 3.1 3.4 0.7 1.1 0.7 2.3 0.9 0.4 0.4 0.3 1.3 0.5 1.5-0.1 1-0.8 2.3-4.5 1-1.1 0.9-0.7 1-0.5 1.2-0.3 3.1 0 11.1 2.7 2.8 1.2 2.7 1.6 3.4 2.6 9.9 11 6.9 11.1 0.3 0.2 0.8 0.5 0.8 0.3 3.1-1z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Qoraqalpoq",id:"UZB32112", url:"M352.7 170.4l6.3 10.7 2.9 2.7 15.7 4.3 0.9 0.5 0 0.8-0.4 1-15.8 29.9-14.9 28.7-3.2 7.5-1.3 16.3 0 0.9 0.2 0.8 6.6 12.2 1.2 2.5-0.3 0.4-0.7 0.7-12.5 7.1-1.2 1.1 0 1 0.5 1.1 24.9 34.3 16.5 23 0 1.1-13.1 6.3-3.1 1-0.8-0.3-0.8-0.5-0.3-0.2-6.9-11.1-9.9-11-3.4-2.6-2.7-1.6-2.8-1.2-11.1-2.7-3.1 0-1.2 0.3-1 0.5-0.9 0.7-1 1.1-2.3 4.5-1 0.8-1.5 0.1-1.3-0.5-0.4-0.3-0.9-0.4-0.7-2.3-0.7-1.1-3.1-3.4-1.1-0.7-3.4-0.6-1.3-0.5-1.8-1.7-2.1-2.3-0.6-0.5-0.8-0.3-1.5-0.3-13.7-12.5-1.9-2.1-1.5-2.7-1-3-0.6-1.3-1-0.6-2.7 0-1.3-0.3-1-0.7-0.8-1.1-1.6-2.9-0.7-2-1.5-2.4-0.5-1.3 0-3.5-0.2-1.6-0.8-0.7-2.9-0.3-2.9-0.7-0.6-0.4-1.2-0.9-1 0.1-0.3 0.2-1.1 1-3 2.1-1.2 0.5-1.6 0.1-0.9 0.2-0.4 0.3-0.2 0.3 0.1 0.4 0.2 0.3 0.6 1.4 0.1 0.8-0.6 1.8-0.7 0.7-1.4-2-1.7-1.5-6.1-2.3-3 0.1-0.8-0.4-0.7-1.1 0.1-1 0.7-0.8 1-0.3 0.1 0 3.4-1.3-0.2-3.1-1.1-3.9 0.5-3.6 1-0.7 1.2-0.5 0.9-0.7 0.2-1.3-0.7-1-1.3-0.8-2.6-1-2.1-1.9-1.6-2.5-1.8-2-2.6-0.3-2.6 0.3-5.1-0.5-12.3 1.9-3-0.1-1.4-0.5-2.3-2.5-1.4-0.5-3-0.3-1.6-1-0.8-1.4-0.7-6-0.5-1.5-0.9-1.3-3.7-3.9-1.4-0.9-1.4 0.2-1.7 0.8-1.7 0.5-1.7 0.1-2.6-0.5-4.1-1.8-3.9-3.7-12.5-14.7-1.4-0.9-1.1 1.8-0.8 6.7-1.2 2.3-2.4 0.8-3-0.2-3-0.7-6.2-2.6-1.5 0-1 0.3-3.1 1.9-2.2 1-1.1 0.8-0.5 1.1 0.3 1.6 1.1 0.9 7.3 3.5 2 1.6 1.8 2.7 1.6 3.7 4.3 7 2.3 2.8 0.7 0.6 0.3 0.7-0.3 0.7-0.7 0.4-3.7 0.6-1-0.3-0.6-1 0-1.2 0.3-1.4 0.2-1.4-0.6-2.8-1.5-2-2-1.5-5.7-2.7-1.3-0.3-1.1 0.2-2.1 0.9-0.9 0.1-1-0.5-1.3-2-0.8-0.8-1.1-0.4-1.3-0.1-1.3 0.3-1.1 0.5-0.6 0.7-0.5 1-1.5 1.7-1.6 0.7-1 0.8 0.4 2.1 1.2 2.7 0.1 1.2-0.5 1.9-2.4 5.4-0.8 0.9-2.2 0.8-0.5 1 0.4 1.2 0.8 0.9 0.1 0.7-1.2 0.9-1.2 0.3-3.9-0.2-1.1 0.3-3.3 1.6-1.3 0.2-0.4-3.3-0.5-2-0.8-1.6-1.1-1.3-1.4-1.1-3.1-1.7-2.5-0.3-0.6-0.2-0.6-0.5-0.8-0.6-1.2-1.9-0.7-0.6-1-0.2-1.5 0.1-3.3 1.1-2.5 1.4-1.5 1.4-0.6 0.6-1.8 3.8-7.3 22.9-0.2 1.2 0 0.4-5.2 2.5-1.7 2.3 0 3 1.3 6.1-0.2 3-0.4 2.5-0.1 2.4 1.1 2.8 1.3 2.1 0.6 2.1 0.2 2.2 0 2.7 0.3 2.2 0.7 2.1 1.2 2 1.2 1.4 0.9 0.6 0.8 0.4 3 0.7 0.4 0.4-0.1 0.5-0.7 0.8-1.2 0.9-2.7 1.3-1.2 1.4-1.8 3.2-1.1 0.7-7.1-1.5-5.5-1.1-13-0.8-14.1-0.7-10.8-0.6-9.4-0.5-0.1-35.7 0-17.9 0-18 0-18 0-18.1 0-18.2 0-18.3 0-18.3 0-18.4-0.1-18.4 0-18.5 0-18.7 0-18.6 0-18.8 0-18.9 0.2-0.1 5.4-1.8 5.4-1.7 5.5-1.8 10.9-3.5 5.4-1.8 5.5-1.7 5.4-1.8 10.9-3.5 5.5-1.7 5.4-1.8 5.5-1.7 5.4-1.8 10.9-3.5 7.3-2.3 7.2-2.2 7.3-2.2 7.3-2.3 3.3-1 3.4-1 6.7-2 3.5-1 7-2 3.5-1 4.7-1.4 1.4 0.1 1.6 0.7 0.5 0.4-0.1 0.1-0.9 2.4-0.2 1.5-0.3 0.9-0.8 1.7-0.2 1 0 2.3-0.2 0.6-0.2 0.2-0.5 0.3-0.2 0.2-0.2 0.3-0.5 1.5-2.1 2.9-0.3 0.5-0.1 0.2-0.6 0.6-2.7 3.8-0.3 0.6-0.1 0.6-0.2 2.1-0.7 2.2-0.8 1.7-0.3 1.3-0.3 2.6-0.3 1.3-0.5 1.3-0.6 1.2-0.4 0.5-0.8 0.8-0.4 0.5-0.2 0.6-0.1 0.6-0.2 1.2-0.2 1.2-3.9 9.5-0.5 3.7-0.2 2.4 0.1 2.4 1.2 3.5 1.2 3.1 1.6 2.6 1 3.6-0.1 1.9-0.4 1.3-0.5 1.2-1.2 0.8-1.4 2-0.3 1.4-0.4 0.8-0.3 0.6-0.1 0.7 0.4 3 1 3.3 1.5 1.4 1.1 1.2 2.3 0.4 2.8-0.2 2.9-1.6 3-2.5 2.6-2.4 1.7-2.2 0.9-1.4 0.7-1.3 1.2-1.4 1.4-2 1.3-2.2 1-1.5 1-1.4 0.3-1-0.8-1.5-1.2-0.5-1.4-0.6 0.8 1.9-1 0.3-1.4-0.4-0.6-1 0.6-3.1 0.7-1.4 0.4-1 1.2-0.4 0.8-0.4 1.2 0.4 0.3 1.6 0.3 1 0.8 0.8 1.2 0.3 1.9-0.5 1-1.2-0.3-1.6-1.3-1.2-0.7-1.2 0.6-2.1 0.1-2.6-0.7-2.7-0.5-2.4 0-1.7 1.2-0.3 1.6-0.3 0.8-1.8 0.3-2 0.5-1.5 0.4-2.4-1.3-0.8-1.3 1-1 2-2.2 1.3-1.4 0.2-1.5 1.2-1.7-1.2-0.1-1.9 0.7-2 1-2.3 0.9-2 1.8-2 0.9-1.7 1.6-1.6 1.7-1.7 1.3-0.6-2.7-2-1.5-1.9-1.3-5.1-0.5-3.3-0.2-2.2 0.2-2.5 0.8-2.9 0.9-2.4 0.5-1.2 5.7 3.9 7.4 5 5.1 3.4 13.7 9.4 8.9 5.9-0.2 0.4-1.4 1.9-0.8 1.6-1.1 3.7-0.9 2.4-1.7 2.9-1.3 1.6-0.6 2.9-0.7 2.8-0.9 2.1-1 1.8-2 2.7-0.9 2-0.7 2-0.4 2 0.7 4.1 1.5 3.5 1.8 2.4 4.8 5.5 7.2 7.2 3.8 3.7 3 2.2 3 2.4 0.7 0.7 0.2 1.1-0.3 2.3-1.2 1.8-2.7 1.8-0.9 2.4-1 2.4-1.3 2.4 0.9 2.2 2.9 0.5 2.6-0.2 2.3-0.7 1.5-1.4 2.1-0.2 2.3 0.4 2.2-0.8 2.4-1.6 3.3-2.2 1.5-2 0.3-1-0.8-0.9-1.1-0.1-1-0.4-0.6-0.6-0.2-0.7 0-0.9 0.3-0.6 0.4-1 0.7-0.6 0.5-0.6 1 0 1.5 0.1 1.6 0.3 1.1-0.3 0.9-0.9 0.4-1.1 0.8-2.7 0.4-2.6-0.3-2.6-0.7-4.3-1-3.3-1.3-2.7-0.4-2.6-0.1-2.2 1-1.4 1-0.8 1.1-1.3 0.8-1.8 0.5-2.3 0-3 0.1-3.9 0-2 1.1 0.8 11.3 7.5 10.6 7.2 9.8 6.4 8.4 5.7 12.1 8 3.6 2.4 1.5 1.7 1 2.2 0.4 1.9 0.4 4.2 0.6 1.9 3.4 5.5 6.6 7.3 3.2 3.4 3.2 3.5 4.1 4.7 3.3 3.8 6.7 7.8 3.3 3.8 3.3 3.8 3.3 3.8 6.5 7.5 4.4 5 2.3 1 0.1 0z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Navoiy",id:"UZB357", url:"M627.6 353.4l0 0.3-7.1 2.9-0.5 1.2-0.7 0.9 0.9 10.8 0.1 0.4 0.2 0.3 0.3 0.7 0.5 0.6 0.4 0.2 0.8 0.5 5.2 1.4 0.3 0.3 0.2 0.3 0.2 0.3 0 0.6 0 0.7-0.2 1.4 0 1.3 0.1 0.4 0.5 1.3 1.3 2.3-1.6 4.1-8.9 17.3-1.1-1.1-0.7-0.9-0.2-0.3-0.1-0.3-0.1-0.3 0-0.4 0.4-1.2 0-0.7-0.1-0.3-0.1-0.3-2-2.3-1.7-1.5-0.6-0.3-0.5-0.1-0.6 0.2-4.2 2.9-1.3 0.6-1.2 0.2-0.9-0.2-1.1-0.4-1-0.6-1.2-0.9-0.9-0.4-0.8-0.1-0.8 0.2-0.7 0.6-0.7 0.7-0.5 0.9-0.5 1-0.7 2.1-0.2 1.2 0 1.2 0.5 1.4 0.4 0.6 0.3 0.6-0.1 0.6-0.4 0.9-0.4 0.4-1.2 0.5-0.3 0.5 0 0.6 0.7 1.8 0.2 2.7-0.4 1.7-0.8 1.7-0.1 0.5 0.1 0.5 0.3 0.4 0.8 0.8 0 0.7-0.3 0.5-1.5 2.1-0.5 1-0.3 1-0.5 1.7-1.5 3.6-0.1 0.5 0.1 0.5 0.3 0.1 0.4 0 1.1-0.2 0.5 0 0.5 0.1 0.5 0.2 0.3 0.5 0.2 0.4 0 0.6-0.3 0.7-0.6 0.6-3.7 3.5-0.7 0.4-12.5 2.6-2.5-0.5-2.5-1.6-1.2 0.4-1.1-0.6-1.1-0.8-2.4-0.9-0.9-1-1.5-2.1-0.6-0.1-0.2-0.1-1.1-0.2-5.3-2.4-0.9 0-0.4 0.2-0.3 0.3-0.3 0.8-0.2 0.5-0.1 0.3 0.1 1-0.2 1.5 0 0.4-0.1 0.4-0.2 0.2-0.1 0.4-1.5 2.2-0.1 0.5 0.2 0.3 0.4 0 0.4 0.1 0.3 0.2 0.3 0.3 0.1 0.4-0.1 0.4-0.2 0.6-0.9 2-0.2 0.5-1 3.9-0.4 0.9-0.5 0.3-0.7 0.3-1.7 0-1.6-0.2-1.7-0.8-2-1.1-0.4-0.1-0.4 0.2-0.3 0.5-0.1 0.5-0.2 1.3-0.5 0.4-0.5 0.4-3.5 0.9-2.8 0.4-0.6 0.1-0.3 0.2-0.3 0.3-0.1 0.4 0.4 0.9 1.8 2 1.1 1 0.5 0.5 0.5 0.7 1.7 6.4 0.1 0.6-0.1 1.1-0.1 0.7-0.2 0.6-1.7 3.9 0 0.4 0.7 2.3 3.1 6.2-1.1 0.7-5.8 1.3-0.1-2.1-0.1-0.5-0.6-2-0.3-0.8-0.3-0.5-0.9-1.2-1-1.1-0.9-0.5-1.4-0.5-1.1-0.6-0.5-1.6-0.2-1.6 0-1.3-0.5-1.7-1-1.7-7-3.3-0.5-0.9-0.9-0.1-2.5 1.1-1.1 0-0.8-0.5-0.2-0.6-0.3-0.7-0.1-0.4-2.7-1.5-1.7-1.1-4.2-5.9-0.9-1.9 0.8-1.9 1-2.1 1.9-2.4 0.2-0.3 0.4-0.5 0.5-1 3.5-1.6 1.1-0.8 1-1 0.8-1.1 2.8-5.6 0.8-0.7 0.6-0.1 0.4-0.3 0.4-0.3 0.4-0.1 1.7-0.2 0.1-0.2-0.3-0.5-0.9-1.2-1.7-1.7-0.6-1.1-0.1-0.3 0-0.2 0.3-0.1 0.5-0.5 1-2.8-1.5-1.5-0.3-1.5 0-0.6 0.1-0.8 0.2-0.7 0.5-0.6 1-0.6 2-0.3 1.3 0 1.2 0.3 1.1 1 1.3 0.9 1.3 0.4 6.8 0.1 0.7-1.3 1.3-4.2 1-1 1.3-1.5 1.6-4.9 0.1-0.9 0.6-1 0.5-0.4 0.5-0.2 0.6 0.1 3 0.6 0.8 0.1 0.1-0.9-0.3-0.9-0.1-1.6 0-1.9 0.1-2 0.3-1.9 1.4-4.8-2.8 0.8-17.6-1.2-5.8-1.4-2-1.2-2-1.6-0.8-2.3-0.5-2-1.3-7.8-0.5-1.8-0.7-0.1-1.8 2.7-1.9 0.8-2.5 0.5-7.7 0.3-2 0.8-1.1 0.6-1.8 6.8-1.3 1.3-15.7-1.9-2.5-0.9-0.8-1.7-0.1-5-0.3-2.6-1.2-1.8-1.1-1-1.1-0.3-1.2 0.4-1.1 1-1 1.5-3.5 7.2-4.1 6.2-7 2.4 0.1-1.5-2.1-2.1-1.3-2.3-17.5-10.8-9-5.1-7.6-3-5.1-1.1-1.4-0.8-7.9-13.9-9.7-11.6-1.5-2.5-1.8-4.3-4.9-0.1-20.6 7.8-24.9-34.3-0.5-1.1 0-1 1.2-1.1 12.5-7.1 0.7-0.7 0.3-0.4-1.2-2.5-6.6-12.2-0.2-0.8 0-0.9 1.3-16.3 3.2-7.5 14.9-28.7 15.8-29.9 0.4-1 0-0.8-0.9-0.5-15.7-4.3-2.9-2.7-6.3-10.7 4.8-0.9 4.1-0.7 7.4-1.4 6.6-1.2 3.3-0.6 5.3-0.9 5.3-0.9 26.5-4.3 5.3-0.9 8.9 0.9 8.8 0.8 8.9 0.8 8.8 0.8 8.1 0.7 8 0.7 8.1 0.8 8 0.7 3.2 0.3 2-0.6 5.9-3.2 5.6-3.1 5.8-3.3 5.6-3.1 1.1-0.4 1-0.4 1.9 0.3 0.9 0.9 1 0.8 6.3 8.2 6.2 8.2 2.9 3.1 2.9 3 6 3.8 6 3.7 2.3 2.1 4.9 10.2 3.2 6.5 4.3 9 3.8 7.7 1 0.1 8.4-4.5 8.3-4.6-1.2 19.7-1.3 19.6-0.3 4.2-0.5 1.4-1.4 0.5-0.3 1.1-0.3 15.3-0.2 15.2 0.2 0.9 0.5 0.4 7 0 6.3 0 6.4 0.1 7 0 0.4-0.1 0.5 0.1 0.4 0 0.3 0.2 1 9.9 1 9.8 1.8 9.6 1.9 9.6 2.5 11.5 2.5 11.3 1.3 1.6 1.3 1.6 1.4 0.4z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Samarkand",id:"UZB358", url:"M619.6 403.9l0.5 0.4 7.3 0.3 2.4 0.7 0.9 0.2 1 0.2 1.3-0.1 1.5-0.3 0.4-0.1 0.3 0.3 0.3 0.4 0.4 1 0.3 0.7 0.1 0.8-0.1 1-0.3 1.1-0.5 1.2-0.1 0.4-0.1 0.5 0 0.5 0.1 3.6 0.1 1.3 0.8 4 0.2 0.3 0.2 0.4 0.4 0.4 1.2 0.5 0.3 0.3 0.2 0.3 0 0.6-0.2 0.4 0 0.6 0.2 0.6 1.6 1.9-0.1 1.8-0.2 0.7-0.2 0.2-0.3 0.3-1.1 0.3-0.3 0.2-0.1 0.4-0.1 0.4 0.3 3.4 0.2 0.4 0.2 0.3 0.7 0.2 0.5 0 0.5-0.1 0.3-0.1 1.1-0.5 0.3-0.1 0.4 0 0.4 0 0.4 0.3 0.3 0.5 0.1 1-0.2 0.5 0 0.7 0.1 0.4 2 2.2 0.8-0.3 0.3 0 0.2-0.1 0.7 1.1 4.6 1.3 0.7 0.1 0.9-0.1 0.4-0.1 0.4 0 1 0.6 0.4 0.2 0.5 0.1 0.6-0.2 1.3 0.1 10.1 1.9 1 1.6 1.5 7.1-0.2 0.6-0.9 0.2-0.4 0-1.6 0.4-1.2 0.4-1.9 1-0.9 0.7-0.4 0.4-0.1 0.4-0.2 0.5 0 1.1 0 0.7 0.1 0.5 0.1 0.4 0.1 0.7 0 0.5 0 0.9-0.1 0.4-0.3 0.4-0.5 0.2-0.5 0.1-1.8 0-0.7 0.2-0.4 0.7-0.2 0.6-0.1 5.2 0.6 1.3 0.8 1 2.4 2.1 4.4 3.9-0.5 0.7-0.7 2.9-0.4 3-0.1 2.8-0.7 2.5-0.4 2.5-0.4 0.2-0.6-0.2-0.6 0.2-0.1 0.1-13.9-3.5-3.1-0.2 0 0.4 0.1 0.8 0 0.3 0 0.4-0.2 0.4-0.2 0.3-0.3 0.3-0.3 0.1-0.7 0.2-6.4 0.2-0.8-0.1-0.4-0.2-0.4-0.2-0.4-0.3-0.2-0.4-0.1-0.6 0.1-1.2 0.4-2-0.2-1.1-1.2-2.2-1.2-0.2-5-1-4.5-0.7-0.8 0-1 0.3-0.9 0.5-0.5 0.4-0.4 0.4-1.9 2.9-0.5 0.5-4.4 1.8-0.4 0-0.8-0.2-0.9-0.5-3.5-2.7-1.4-1-1.1 0.1-8.4 1.9-0.3 0.1-5.6 2.7-1.2 0.8-0.9 0.3-2.1 0-3.9-1-0.3-0.3-0.3-0.5-0.1-0.8-0.1-0.6 0-0.5 0.1-1.2 0-1.1-0.2-0.5-0.2-0.4-1.4-1.1-1.8-1.2-3-3-0.6-0.8-0.4-0.6-0.1-0.4-0.6-2.5-0.1-0.3-0.2-0.3-0.3-0.3-0.3-0.2-0.4-0.1-0.5-0.1-1.8 0-0.7 0.1-0.5 0.3-0.1 0.4 0 0.4 0 1.1 0 0.4-0.1 0.4-0.2 0.3-0.2 0.3-1.3 0.9-1.2 0.7-0.7 0.2-24.8-0.6-3.1-6.2-0.7-2.3 0-0.4 1.7-3.9 0.2-0.6 0.1-0.7 0.1-1.1-0.1-0.6-1.7-6.4-0.5-0.7-0.5-0.5-1.1-1-1.8-2-0.4-0.9 0.1-0.4 0.3-0.3 0.3-0.2 0.6-0.1 2.8-0.4 3.5-0.9 0.5-0.4 0.5-0.4 0.2-1.3 0.1-0.5 0.3-0.5 0.4-0.2 0.4 0.1 2 1.1 1.7 0.8 1.6 0.2 1.7 0 0.7-0.3 0.5-0.3 0.4-0.9 1-3.9 0.2-0.5 0.9-2 0.2-0.6 0.1-0.4-0.1-0.4-0.3-0.3-0.3-0.2-0.4-0.1-0.4 0-0.2-0.3 0.1-0.5 1.5-2.2 0.1-0.4 0.2-0.2 0.1-0.4 0-0.4 0.2-1.5-0.1-1 0.1-0.3 0.2-0.5 0.3-0.8 0.3-0.3 0.4-0.2 0.9 0 5.3 2.4 1.1 0.2 0.2 0.1 0.6 0.1 1.5 2.1 0.9 1 2.4 0.9 1.1 0.8 1.1 0.6 1.2-0.4 2.5 1.6 2.5 0.5 12.5-2.6 0.7-0.4 3.7-3.5 0.6-0.6 0.3-0.7 0-0.6-0.2-0.4-0.3-0.5-0.5-0.2-0.5-0.1-0.5 0-1.1 0.2-0.4 0-0.3-0.1-0.1-0.5 0.1-0.5 1.5-3.6 0.5-1.7 0.3-1 0.5-1 1.5-2.1 0.3-0.5 0-0.7-0.8-0.8-0.3-0.4-0.1-0.5 0.1-0.5 0.8-1.7 0.4-1.7-0.2-2.7-0.7-1.8 0-0.6 0.3-0.5 1.2-0.5 0.4-0.4 0.4-0.9 0.1-0.6-0.3-0.6-0.4-0.6-0.5-1.4 0-1.2 0.2-1.2 0.7-2.1 0.5-1 0.5-0.9 0.7-0.7 0.7-0.6 0.8-0.2 0.8 0.1 0.9 0.4 1.2 0.9 1 0.6 1.1 0.4 0.9 0.2 1.2-0.2 1.3-0.6 4.2-2.9 0.6-0.2 0.5 0.1 0.6 0.3 1.7 1.5 2 2.3 0.1 0.3 0.1 0.3 0 0.7-0.4 1.2 0 0.4 0.1 0.3 0.1 0.3 0.2 0.3 0.7 0.9 1.1 1.1z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Qashqadarya",id:"UZB361", url:"M662.5 495.2l-0.4 0.4-0.3 0.3-0.1 0.5-0.1 1.1 0.4 3 1.6 1.5 7.1 2.5 4.7 0.2 2.3 0.9 0.2 0.3 0.5 0.9 0.3 0.3 0.4 0.1 1-0.2 0.4 0.1 0.5 0.9 0.1 1-0.7 5.8 0.3 1.9 0.1 0-0.9 0.7-1 0.4-4.2 0.2-0.8 0.2-0.6 0.3-0.4 0.2-0.3 0.3-0.5 0.4-0.3 0.6-0.2 0.5 0 0.6 0.5 1.8 0.3 2.7 1.4 2.5 0.1 0.3 0.1 0.4 0 0.5-0.1 0.4-0.1 0.5 0 0.4-0.1 0.4 0 0.4 0.1 0.4 0 0.4 0.2 0.3 0.1 0.8 0.1 0.4 0 0.4-0.2 0.6-0.3 0.6-0.6 0.9-0.3 0.6-0.1 0.6 0 1.3-0.1 0.3-0.2 0.3-0.4-0.1-0.3-0.2-1.1-1.1-0.2-0.2-0.3-0.2-0.4-0.2-0.9-0.2-0.9-0.1-0.8 0-0.8 0.2-0.8 0.4-0.5 0.4-0.4 0.4-0.3 0.3-3.5 6.8-0.6 0.8-1 1.1-0.6 0.4-0.9 0.5-2.3 0.6-0.4 1-0.7 1.1-1 1.1-2.2 1.8-0.3 0.5-0.4 1-0.3 1.2-0.6 3.8-0.5 1.8-0.1 0.4-0.8 0.8-6.4 5.2-3.3 1.8-0.7 0.2-2.1 0.4-0.5 0.3-0.5 0.7-0.9 1.5-0.6 1.5-0.3 0.8-0.3 0.9-0.4 0.9-0.4 0.8-7.1 6.6-0.5 0.7-0.3 1.2-0.3 2.9-0.3 1-0.9 1.8-1.8 1.1-0.7-2-1.9-1.4-2.1-1.1-2.3-0.6-4.4 0-1.8-0.5-5.9-2.8-2.7-3.4-1.7-1.7-1.9-0.8-3.8-1.1-3.6-2.9-1.6-0.9-3.9-0.6-5.8-2.8-2-0.2-1.6 0.7-2.8 2.2-1.5 0.9-4 0.3-3.9-1.3-9.6-6.5-5.8-3.9-7.8-5.3-5.5-5.1-7.8-7-3.9-2.5-8.5-3-7.5-4.3-12.2-10.4-3.3-4.3 0.9-0.9 5.3-5.9 2.7-1.8 8-3.3 3.1-1.1 9.7-3.5 0.3-0.2 0.3-0.3 0.1-0.6 0-0.5-0.2-0.3-0.2-0.3-1.8-2.3-0.4-0.6-0.3-0.7-0.1-0.3-0.1-0.4 0-0.4 0.1-0.4 0.4-0.6 0.5-0.8 4.4-4.8 0.4-0.3 0.4-0.2 0.7-0.1 0.6 0.1 0.7-0.3 0.7-0.6 5.8-5.8 2.7-2.1 5.8-1.3 1.1-0.7 24.8 0.6 0.7-0.2 1.2-0.7 1.3-0.9 0.2-0.3 0.2-0.3 0.1-0.4 0-0.4 0-1.1 0-0.4 0.1-0.4 0.5-0.3 0.7-0.1 1.8 0 0.5 0.1 0.4 0.1 0.3 0.2 0.3 0.3 0.2 0.3 0.1 0.3 0.6 2.5 0.1 0.4 0.4 0.6 0.6 0.8 3 3 1.8 1.2 1.4 1.1 0.2 0.4 0.2 0.5 0 1.1-0.1 1.2 0 0.5 0.1 0.6 0.1 0.8 0.3 0.5 0.3 0.3 3.9 1 2.1 0 0.9-0.3 1.2-0.8 5.6-2.7 0.3-0.1 8.4-1.9 1.1-0.1 1.4 1 3.5 2.7 0.9 0.5 0.8 0.2 0.4 0 4.4-1.8 0.5-0.5 1.9-2.9 0.4-0.4 0.5-0.4 0.9-0.5 1-0.3 0.8 0 4.5 0.7 5 1 1.2 0.2 1.2 2.2 0.2 1.1-0.4 2-0.1 1.2 0.1 0.6 0.2 0.4 0.4 0.3 0.4 0.2 0.4 0.2 0.8 0.1 6.4-0.2 0.7-0.2 0.3-0.1 0.3-0.3 0.2-0.3 0.2-0.4 0-0.4 0-0.3-0.1-0.8 0-0.4 3.1 0.2 13.9 3.5z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Surhandaryo",id:"UZB362", url:"M620.5 593.7l1.8-1.1 0.9-1.8 0.3-1 0.3-2.9 0.3-1.2 0.5-0.7 7.1-6.6 0.4-0.8 0.4-0.9 0.3-0.9 0.3-0.8 0.6-1.5 0.9-1.5 0.5-0.7 0.5-0.3 2.1-0.4 0.7-0.2 3.3-1.8 6.4-5.2 0.8-0.8 0.1-0.4 0.5-1.8 0.6-3.8 0.3-1.2 0.4-1 0.3-0.5 2.2-1.8 1-1.1 0.7-1.1 0.4-1 2.3-0.6 0.9-0.5 0.6-0.4 1-1.1 0.6-0.8 3.5-6.8 0.3-0.3 0.4-0.4 0.5-0.4 0.8-0.4 0.8-0.2 0.8 0 0.9 0.1 0.9 0.2 0.4 0.2 0.3 0.2 0.2 0.2 1.1 1.1 0.3 0.2 0.4 0.1 0.2-0.3 0.1-0.3 0-1.3 0.1-0.6 0.3-0.6 0.6-0.9 0.3-0.6 0.2-0.6 0-0.4-0.1-0.4-0.1-0.8-0.2-0.3 0-0.4-0.1-0.4 0-0.4 0.1-0.4 0-0.4 0.1-0.5 0.1-0.4 0-0.5-0.1-0.4-0.1-0.3-1.4-2.5-0.3-2.7-0.5-1.8 0-0.6 0.2-0.5 0.3-0.6 0.5-0.4 0.3-0.3 0.4-0.2 0.6-0.3 0.8-0.2 4.2-0.2 1-0.4 0.9-0.7 1 1 7.4 1.3 1.6-0.1 4.4-1.5 0.8-0.4 0.8-0.2 0.9 0 0.9 0.4 0.5 0.2 0.9 0.9 0.9 0.2 1-0.4 1-0.7 0.4-0.1 0.5 0 0.5 0 0.5 0.1 0.9 1.1 1.9 4.4 1.7 2.5 0.6 1.5-0.1 1.6-0.5 1.3-0.7 1-0.9 0.8-1 0.5-1.4 0.3-1 0-0.6 0.4-0.2 1.6 0.1 0.8 0.4 0.6 0.2 0.7 0 0.9-0.3 0.4-1.5 1.1-0.4 1.1 0.1 1.3 0.8 2.8 0.1 1.5-0.2 4.3 0.2 1.6 0.4 1 1.4 2.2 0.4 1.1 0.1 2.4 0.2 1 0.5 1.1 2.3 2.2 2.2 3.9 1 1.1 3 1.7 4.6 4.1 1.4 2.2 0.2 2.9-0.9 4.3-1.4 4.1-2.3 3.5-0.7 1.4-0.5 1.2-0.2 1.2-0.5 0.9-0.9 0.7-0.9 0.2-2.7 0.4-1.8 0.6-1 1.1-2.5 7.5-1.7 3.4-4.2 5.9-3.2 3-3 3.8-2.4 4.3-1.7 4.5-0.2 3.1 1.2 5.8 0.2 3.1-0.3 2.6-0.7 2.5-1.1 2.2-0.3 1-0.2-1.3-0.7-1-1-0.6-1.2-0.3-2.1 0.1-0.8-0.1-0.6-0.4-1.3-0.9-0.6-0.2-0.7 0.1-1.1 0.3-0.6 0.1-0.4 0.3-0.3 0.7-0.5 0.7-0.6 0.3-1-0.9-1.1-3-1.3-0.7-1.2 0.4-1.1 0.8-1.9 1.9-1.1 0.9-1.2 0.6-1.3 0.3-1.4 0.2-1.5 0.3-2.2 1.4-1.3 0.3-1.3-0.5-0.6-1.1-0.5-1.4-0.5-1.3-1.2-1-2.6-1-1.2-0.8-0.5-1.1-1-3.2-0.7-0.6-1.2-0.4-2.3-1.6-1.1-0.6-2.8 0-5.3 1.2-7.6 0.4-0.6 0.2-1.2 1-0.6 0.2-1.6 0-0.7-0.2-3.8-1.6-1.4-0.2-1.5 0.2-1.1 0.3-1.5-1.1 0.1-1.3 0.9-1.3 1.1-1.1 0.9-1.5-0.2-1.2-0.9-1-1.2-1-0.8-2 0.3-2.7 1.2-4.9 0.2-2.9-0.4-5.8 0.2-2.9 2-3.6 3.3-4.2 2.1-4.2-0.6-1.5z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Andijon",id:"UZB363", url:"M945.5 406.7l-0.1-0.4-0.5-1.8-0.1-1 0.2-1.4 0.2-1.4 0-0.9 0-0.5-0.1-0.4-0.8-0.7-3-0.9-0.7-0.1-0.4-0.3-1.1-1.7-0.8-0.6-0.6 0.5-0.6 0.8-1 0.1-3.5-0.7-2.8-0.9-1.6 0.1-1.2 0.2-1.4-0.2-0.5-0.2-0.5-0.3-2.3-3.2-0.5-0.9-0.5-0.5-0.7-0.4-3-1-0.9-0.1-0.7 0.1-0.3 0.2-0.5-0.1-0.8-0.2-1.6-0.9-0.6 0-0.3 0.3-0.1 1.3-0.3-0.1-0.6-0.9-1.2-2.4-1.8-2.6 1.7-1.7-0.9-1.9-0.7-0.9-0.1-0.6 0.3-0.4 1.9-1.8 0.7-0.5 0.8-1.1 6-1.6 1.9 0.9 2.4-1.1 0.7-0.2 1.3 0 1.4 0.1 1.6-0.2 7.6 1.9 1 0.1 1-0.2 3.5-0.1 0.8-0.2 0.4-0.2 0.2-0.1 0.5-0.4 1.4-6.4 0.3-1.3 3.3-1 2.2-0.3 0.4-0.4 0.7-2 0.3-0.5 1.1-0.9 0.7 0.5 1.7 2.6 1.2 0.8 1.7 0.5 3.1 0.3 0.3 0.2 0.1 0.3 0 0.4-0.1 0.5 0 1.8 1.1 0.5 1.4 0.1 1.2 0.5 2.4 3.9 1.8 1.9 2.3 1 2.5 0.3 7.5-0.7 2.2 0.7 0.3 2.2-0.2 1.3 0.8-0.1 2.7-1.9 4.3-2 0.9 0.6 0.8 1.2 1.2 0.8 3.4-0.2 1.8 0.4 0.3 1.5-1.8 2.4-2.7 1.6-5.5 2-5 3.1-4.2 1.1-2 0.9-1.4 2.1-0.7 5.1-1.7 0.8-2.1-1-1.1 0-0.4 1.3-0.1 1.1-0.3 1.1-0.5 0.9-0.9 0.8-2.3 0.1-4.1-2.8-2.2-0.3-1.7-0.9-1.9-2.2-2-1.7-1.7 0.8-0.2 1.2 1.3 2.1-0.1 1.4-0.3 1.3 0 0.8 0.5 0.7 2.5 1.8 0.6 1.6 0 1.8-0.7 1.9-1.2 1.6-1.3 0.3-1.6-0.6-3.4-2-0.9-0.3-2.6 0.1-0.8-0.3 0.3-0.7 0.7-0.2 1-0.1 0.8-0.2 0.3-0.8-0.6-0.5-1-0.1-0.5 0.1z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Farg`ona",id:"UZB364", url:"M918.1 449l-0.9 0.2-1.4-0.5-1.2-0.5-1.2-0.9-0.6-1.1 1-1.2 1.4 0 1-0.5 2.1-1.6 1.5-0.5 0.2 0.8-1.3 4.9-0.6 0.9z m-34.1-10.6l0.4 0.1 0.3-0.2 0.6-0.5 0.4-0.2 1.4-0.4 0.8 0.2 0.4 0.7-0.4 1.2-2.7 1.9-0.9 0.9 0.1 2 2.6 2.7-0.1 2.4-0.7 0.9-0.8 0.3-1.9 0-2.8 0.8-0.8-0.1-0.7-0.7-0.1-0.8-0.3-0.6-1.1-0.1-0.7 0.5-0.8 0.8-0.8 0.5-0.7-0.4-0.1-1.9 2.5-3.9-0.3-2.3-0.7-0.5-1.5-0.3-0.8-0.4-0.6-1-1.5-3.1-0.3-1.3 0.1-1.2 0.3-1.4 1-2.3 1.8-1 1.3 0.8 1 1.8 0.8 2.1 1 1.3 1.6 1 3.2 1.4 0.2 0.2 0.3 0.1z m23.9-55.8l1.8 2.6 1.2 2.4 0.6 0.9 0.3 0.1 0.1-1.3 0.3-0.3 0.6 0 1.6 0.9 0.8 0.2 0.5 0.1 0.3-0.2 0.7-0.1 0.9 0.1 3 1 0.7 0.4 0.5 0.5 0.5 0.9 2.3 3.2 0.5 0.3 0.5 0.2 1.4 0.2 1.2-0.2 1.6-0.1 2.8 0.9 3.5 0.7 1-0.1 0.6-0.8 0.6-0.5 0.8 0.6 1.1 1.7 0.4 0.3 0.7 0.1 3 0.9 0.8 0.7 0.1 0.4 0 0.5 0 0.9-0.2 1.4-0.2 1.4 0.1 1 0.5 1.8 0.1 0.4-2.6 0.1-1 0.2-3.9 2.2-0.5 0.8-0.4 1.4-0.8 2.1-1.5 1.6-5.1 2.5-0.3 1.1 0.4 1.2 1.1 0.7 1.7 0.8 0.8 0.6 0.3 0.6-0.4 0.8-0.8 0.2-0.9-0.1-0.7-0.3-0.4-0.1-0.4 0-0.7 0.2-2.2-0.2-2.3-0.5-2.2 0.1-1.8 1.8-1 2.4-0.7 1.1-0.9 0.9-3.1 1.8-0.8 0.2-1.2-0.5-0.3-1.2 0-3.1-0.4-1.5-0.8-1.7-1.1-0.9-1 0.9-0.4 1.5-0.1 1.3-0.5 0.9-1.4 0.1-2.8-0.5-1.3-0.6-1.2-0.7-1.1-1.1-0.5-1.1-0.5-0.9-2.6-0.8-1.8-1.7-1.2-0.1-1.8 0.2-1-0.1-0.8-0.4-0.6-0.7-0.5-0.8-0.6-0.4-0.8 0.2-1 1.4-0.5 1.7-0.8 1.3-1.8 0.2-6.8-1-3.4 0.6-2.1 2.1-1.2-0.1-5.1 0.5-8.3 2.5-2.5 0.2-2.4-0.1-2.4-1.7-1-3.2-0.8-3.6-1.5-2.5-1.3-0.5-1.1 0.1-1.1 0.3-1.3 0.1-1.2-0.3-2.9-1.3 0.8-2.7-0.2-0.3-0.5-0.6-0.1-0.1-0.7-1.1-0.1-0.2-0.1-0.4-0.1-1.6 0.9-1.5 1.7-1.1 4-0.9 0.6-0.3 0.6-0.7 1.4-2.4 0.8-0.8 0.8-0.4 0.8-0.2 0.9-0.4 0.7-0.7 2.1-2.5 3.5-2.9 0.9-0.8 0.8-0.7 0.5-0.2 1-0.2 0.2-0.3 0.1-0.4 0.2-0.3 0.9-0.6 1.5-0.9 0.6-0.8 0.5-0.7 0.7-0.7 0.9-0.5 0.8-0.1 1.6 0.2 0.8-0.1 2.7-2.5 1.2 0 0.9 0.4 0.5 0.3 0.4 0.4 1.8 0.2 6.6-0.3-3.7 5 0.3 0.4 2.3 0.2 0.4 0.2 1.7 1.8 0.4 0.2 0.6 0.2 1.1 0.2 0.6 0.2 1.2 1 2.7 1.5 0.8 0.2 1.3-0.2 3.8-3.6 1.8-2.9 1.2-0.9 5.1-2.8 4.8-1.6z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Namangan",id:"UZB365", url:"M943.6 364.7l-0.3 1.3-1.4 6.4-0.5 0.4-0.2 0.1-0.4 0.2-0.8 0.2-3.5 0.1-1 0.2-1-0.1-7.6-1.9-1.6 0.2-1.4-0.1-1.3 0-0.7 0.2-2.4 1.1-1.9-0.9-6 1.6-0.8 1.1-0.7 0.5-1.9 1.8-0.3 0.4 0.1 0.6 0.7 0.9 0.9 1.9-1.7 1.7-4.8 1.6-5.1 2.8-1.2 0.9-1.8 2.9-3.8 3.6-1.3 0.2-0.8-0.2-2.7-1.5-1.2-1-0.6-0.2-1.1-0.2-0.6-0.2-0.4-0.2-1.7-1.8-0.4-0.2-2.3-0.2-0.3-0.4 3.7-5-6.6 0.3-1.8-0.2-0.4-0.4-0.5-0.3-0.9-0.4-1.2 0-2.7 2.5-0.8 0.1-1.6-0.2-0.8 0.1-0.9 0.5-0.7 0.7-0.5 0.7-0.6 0.8-1.5 0.9 0.1-0.6 0.5-2.6-2.2-1.3-5.3-1.3-0.9-1.1-0.2-1.4 0.6-0.9 1.1-0.2 2 1.8 1.2 0.4 0.1-1.4-0.5-0.7-10.6-12-1.8-1.6-0.2-0.2-0.1-0.3-1.2-1.2 0.5-1.8-0.2-5.7-0.2-1.7-1.2-2-1.2-1.6-0.3-0.6-0.2-0.5 0-0.6 0.1-0.4 1.1-2.4 0.2-0.5 0.3-1-0.2-0.7-1.6-0.2-0.2-0.3-0.2-0.4-0.1-1.2-0.1-0.9 0.1-0.5 0.1-0.5 2.9-3.8 0.5-0.9 0.7-1.9 0.4 0 1.9-0.7 7.2-4.1 1.9-0.3 1.1 0.7 1 1.3 3.3 5.6 0.5 1.6 0.1 1.6-0.8 4.8 0.1 1.3 0.7 1.1 0.9-0.1 1.2-0.6 1.3-0.1 1.1 0.5 1 0.7 1 1 0.8 1.1 1 1 1.2 0.1 2.5-0.3 2.8 0.5 1.3 0.6 1.2 0.9 1 0.6 2.2 0.3 0.9 0.8 1.5 2.4 0.9 0.7 0.6-1.5-0.1-1.6-0.3-1.4 0.1-1.1 1.2-0.7 1.4 0.2 0.7 0.9 0.7 2.9 0.5 1.1 0.8 0.8 0.8-0.1 0.6-1.5 1.4-1.8 4 3.4 1.3-1.1 0.3-2.7-0.5-13.3 0.4-1 0.8 0.2 2.8 2.6 2.5 1.1 2-0.4 1.6-1.7 1.9-4.2 0.8-2.6 0.3-1.5-0.2-1.4-1.7-2.2-0.6-1.3 1.2-2.9 0.7-0.9 1.3-0.5 1.3 0.2 0.7 1 0.3 1.5 0 1.6-1.1 4.4 0.1 0.9 0.5 0.2 0.4-0.6 0.2-0.8 0.3-0.5 0.6 0.3 0.3 1.2 0.6 0.3 0.4-0.4 0.1-1.7 0.4-0.3 0.4 0.2 0.5 0.4 5.5 8.2 0.9 2.3 0.3 2.6-0.1 3.2 0.3 3.3 1.5 0.7 4.6-0.8 1.4 1.2 0.9 1.3 1 0.5 1.7-1 1.3-1.2 1.4-0.8 1.4-0.3 1.5 0.9 0.6 1.5 0.3 2.1 0.1 2.2 0.5 4 0 1.5-0.4 1.4-0.8 1.9 1.8-0.6z m-90.2 4.2l-0.7-1.9-0.8-1.3-1.4-1.2-1.6-0.7-0.9 0.2 0.6 1.6 1.1 1.1 1.7 2.3 1 0.9 1.1 0.3-0.1-1.3z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Jizzah",id:"UZB370", url:"M715.3 391.1l-0.2 3.1-0.7 0.8-3.2 0.6-0.8 0.1-0.3 0.2-0.3 0.2-0.1 0.4-0.1 1.8-0.4 2.9 0.2 0.4 0.3 0.3 0.9-0.2 1.1-0.3 0.5 0 0.2 0.9-6.9 15.8-0.2 1.1-0.2 1.2 0.3 2.1 0.2 0.6 0.3 0.6 0.3 0.2 1.6 0.3 13.2 0.3 17.4-4.3 0.2 0 0.1 0.1-0.3 0.6-0.3 0.4-0.2 0.4-0.3 0.5-0.8 2.9-0.2 0.5-0.2 0.7 0.7 1.3 0 0.1-2.3 0.6-1.2 0.9 1.5 1.6 2.6 1.7 2 0.8 0.6-0.1-2.5 3.3-0.9 1.6-0.3 0.8 0 0.6 0 0.5 0.1 0.4 0.2 0.7 0.4 0.8 0.4 1.4 0.2 0.7 0.1 0.4 0 0.7-0.1 2.5-0.2 0.4-0.3 0-0.1-0.3-0.3-0.3-0.3-0.1-0.3-0.1-0.5 0.3-0.1 0.3 0.2 0.3 0.2 0.3 1.1 0.6 0.3 0.3 0.1 0.3-0.1 0.4-0.1 0.5-0.3 0.7-0.1 1.2-0.1 0.7-0.2 0-0.6-0.1-0.6 1.7-0.6 12.2-0.3 1.8-0.8 1.5-1.4 1.4-2.5 1.6-0.8 1.1 0.7 1.5-1.2 0.5-3.6 1-2.8 0.2-2.9-0.2-4.7-1.7-8.7-0.2-19.9-5.2-2.7-0.1-2.2 0.7-5.4 3.9-4.6 0.7-1.2 1.2 0.4 3.3-0.2 0.3-0.2 0.2-0.3 0.1-0.3 0.1-1.5-0.2-0.9 0.1-4.4-3.9-2.4-2.1-0.8-1-0.6-1.3 0.1-5.2 0.2-0.6 0.4-0.7 0.7-0.2 1.8 0 0.5-0.1 0.5-0.2 0.3-0.4 0.1-0.4 0-0.9 0-0.5-0.1-0.7-0.1-0.4-0.1-0.5 0-0.7 0-1.1 0.2-0.5 0.1-0.4 0.4-0.4 0.9-0.7 1.9-1 1.2-0.4 1.6-0.4 0.4 0 0.9-0.2 0.2-0.6-1.5-7.1-1-1.6-10.1-1.9-1.3-0.1-0.6 0.2-0.5-0.1-0.4-0.2-1-0.6-0.4 0-0.4 0.1-0.9 0.1-0.7-0.1-4.6-1.3-0.7-1.1-0.2 0.1-0.3 0-0.8 0.3-2-2.2-0.1-0.4 0-0.7 0.2-0.5-0.1-1-0.3-0.5-0.4-0.3-0.4 0-0.4 0-0.3 0.1-1.1 0.5-0.3 0.1-0.5 0.1-0.5 0-0.7-0.2-0.2-0.3-0.2-0.4-0.3-3.4 0.1-0.4 0.1-0.4 0.3-0.2 1.1-0.3 0.3-0.3 0.2-0.2 0.2-0.7 0.1-1.8-1.6-1.9-0.2-0.6 0-0.6 0.2-0.4 0-0.6-0.2-0.3-0.3-0.3-1.2-0.5-0.4-0.4-0.2-0.4-0.2-0.3-0.8-4-0.1-1.3-0.1-3.6 0-0.5 0.1-0.5 0.1-0.4 0.5-1.2 0.3-1.1 0.1-1-0.1-0.8-0.3-0.7-0.4-1-0.3-0.4-0.3-0.3-0.4 0.1-1.5 0.3-1.3 0.1-1-0.2-0.9-0.2-2.4-0.7-7.3-0.3-0.5-0.4 8.9-17.3 1.6-4.1-1.3-2.3-0.5-1.3-0.1-0.4 0-1.3 0.2-1.4 0-0.7 0-0.6-0.2-0.3-0.2-0.3-0.3-0.3-5.2-1.4-0.8-0.5-0.4-0.2-0.5-0.6-0.3-0.7-0.2-0.3-0.1-0.4-0.9-10.8 0.7-0.9 0.5-1.2 7.1-2.9 0-0.3 3.3 0.9 6.8-0.4 5.7-0.4 14.6-0.9 7.5-0.4 12.2-0.8 7.4-0.4 1.4 0.4 2.4 1.3 1.3 0.4 1.1-0.2 1.7-1.1 1.7-1.1 1.4-1 0.4 1.2 0.3 1 0.2 0.2 0.4 0.8 1.3 1.7 1.3 1.7 0.6 1.4 0.2 1.5 0.2 1.4 0.4 0.7 0.4 0.6 0.7-0.6 0.7-0.3 0.7 0.1 0.7 0.8 0.8-1.7 1.2-0.1 0.2 1.6 0 0.2-0.1 0.7 0.6 0.2 0.1 0.1-1.3 1-0.5 0.3 0.5 0.2 0.2 0.4 0.5 0.9 0 2.2-0.3 1.3-0.3 1.3-0.4 1.2-0.4 1.3-0.9 2-0.7 1-0.8 1-1 0.7-2 1-0.6 0.4-0.1 0.6 0.3 0.3 2.3 0.5 1.8 1 5.3 5.3 2 1.5 1.9 1.6 2.4 1.2z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Sirdaryo",id:"UZB371", url:"M737 453.1l0.1-0.7 0.1-1.2 0.3-0.7 0.1-0.5 0.1-0.4-0.1-0.3-0.3-0.3-1.1-0.6-0.2-0.3-0.2-0.3 0.1-0.3 0.5-0.3 0.3 0.1 0.3 0.1 0.3 0.3 0.1 0.3 0.3 0 0.2-0.4 0.1-2.5 0-0.7-0.1-0.4-0.2-0.7-0.4-1.4-0.4-0.8-0.2-0.7-0.1-0.4 0-0.5 0-0.6 0.3-0.8 0.9-1.6 2.5-3.3 13.6-2.7 2.7 1.9 0.4 1.1 0.1 1.2 0 1.1-0.5 0.9-1.3 0.2-4.3-0.6-1.1 0.3-2.1 1.8-0.8 0.3-1.3-2.4-0.9-0.7-0.7 1.4 0.1 0.7 1 0.8 0.2 0.6-0.1 1.5 0.1 0.7 0.3 0.8 5.1 7.1 0.2 1.7-2.5 1-1.3-2.1-0.9-3.2-1.2-2.6-1.2-0.9-0.4 0.6 0.2 1.4 0.6 1.7 1.3 2.7-0.1 1.1-0.7 1.5-0.2 0.1-0.6 0.1-0.2 0.1-0.4 1.2 0 0.5-0.1 0.7-0.4 0.5-0.8-0.4-1.5-2.5-1-0.8-2 1.8-0.6-0.3z m25.2-27.9l-1.9-1-1.3-0.2-9.4 1.5-1.2 0.5-2 1.1-1.4 0.2-3.3-0.6-1.3 0.1-3.3 0.9 0-0.1-0.7-1.3 0.2-0.7 0.2-0.5 0.8-2.9 0.3-0.5 0.2-0.4 0.3-0.4 0.3-0.6-0.1-0.1-0.2 0-17.4 4.3-13.2-0.3-1.6-0.3-0.3-0.2-0.3-0.6-0.2-0.6-0.3-2.1 0.2-1.2 0.2-1.1 6.9-15.8-0.2-0.9-0.5 0-1.1 0.3-0.9 0.2-0.3-0.3-0.2-0.4 0.4-2.9 0.1-1.8 0.1-0.4 0.3-0.2 0.3-0.2 0.8-0.1 3.2-0.6 0.7-0.8 0.2-3.1 4.5 2.4 6.8 3.6 0.2-0.4 0.7-0.7 0.9 0 0.4-0.5 0.4-0.7 0.5-0.3 0.7 0.1 2.3 1.1 1.5 0.3 1.3-0.8 0.3-1-1.1-0.6 1.4-2.3 0.1-0.5-0.5-0.9-0.3-0.9-0.3-1 0.1-1-1.5-0.3-0.5-0.3-0.5-0.6-0.4-1.5-0.3-3.2-0.3-3.2 0.1-0.6 0.1-0.6 0.4-0.4 0.3-0.3 0.4-0.8 0.1-0.8-0.2-1.7 0.1-0.8 0.2 0.1 0.6 0.2 0.2 0.2 0.7-1.8 1.6-1.1 1.2-0.6 3 2.7 0.4 0.7 0.2 0.8 0.1 1.8 0.2 0.6 0.3 0.2 0.5-0.4 0.2 0 0.2 0.5 0.2 1.3 0.9-0.4 1.3 0.3 1.3 0.5 0.9 0.7 0.5 0.7 0.6 1.3 0.5 0.5 0.4 0.3 1.5 0.8 0.7 0.5 0.3 0.4 0.6 1.3 0 0.3-0.1 0.9 0.1 0.4 0.4 0.3 0.4 0.1 0.4-0.1 0.4 0.1 0.8 0.8 0.6 0.9 0.2 1-0.8 1 0.9 0.6 0.8-0.3 0.8-0.5 0.9-0.3 0.6 0.3-0.3 0.8-0.9 1.5 2.5-0.4 1 0.1 0.7 1.9 1.1 0.9 0.3 0.7-0.3 0.6-0.9 0.9 0 0.6 0.4 0.3 0.6-0.4 0.6-0.7 0.6-0.3 0.5 0.3 0.4 0.5 0 0.5-1.5 0.7-0.5 1.1-0.7 2.7 0.7-0.1 0.6 0.1 0.6 0.2 0.5 0.4-1.1 0.6 0.1 0.6 0.6 0.6 0.4 0.5 0.1 0.6 0.2 0.7 0.1 0.7-0.2 0.6-0.9 1.1-0.3 0.6-0.3 0.7-0.2 0.6-1.2 7 0.8 2.1 0.4 0.6 0.1 1.1-0.8 3-0.3 1.1z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Tashkent viloyati",id:"UZB372", url:"M843.4 333.9l-0.7 1.9-0.5 0.9-2.9 3.8-0.1 0.5-0.1 0.5 0.1 0.9 0.1 1.2 0.2 0.4 0.2 0.3 1.6 0.2 0.2 0.7-0.3 1-0.2 0.5-1.1 2.4-0.1 0.4 0 0.6 0.2 0.5 0.3 0.6 1.2 1.6 1.2 2 0.2 1.7 0.2 5.7-0.5 1.8-0.7-0.8-2.6-1.1-2.2 0.6-1.6 8.1-3.2 3.8-4.2 2.6-6 2.4-5.5 4.2-10.7 3.4-1.3 0.6-1.2 1-2.4 3.1-1.4 1.2-1.5 0.5-1.8-0.6-0.8-0.7-0.6-0.8-1-1.8-0.7-0.8-1.4-1-0.7-0.6-2.3-3.5-1.3-1.3-1.9-0.2-0.9-0.5-0.7-0.8-0.8-0.6-1-0.1-1.9 0.6-0.9 0.5-0.9 0.7-1.4 1.9-0.9 2-0.4 2.3-0.1 2.8 0.4 4.1-0.2 1-0.9 0.5-3.5 0.3-2.1 1.5 0 1.6 2.3 3.9 0.1 0 1.2 4.3 0.6 1.4 1.5 2.7 0.6 1.5 0.4 1.7-0.5 3.7-1.8 0.3-2.3-0.8-1.5 0.2 0.3 2.2 4.2 3.8 0 1.8-2.2 1-2.9-0.1-5.2-1.5-2-1 0.3-1.1 0.8-3-0.1-1.1-0.4-0.6-0.8-2.1 1.2-7 0.2-0.6 0.3-0.7 0.3-0.6 0.9-1.1 0.2-0.6-0.1-0.7-0.2-0.7-0.1-0.6-0.4-0.5-0.6-0.6-0.1-0.6 1.1-0.6-0.5-0.4-0.6-0.2-0.6-0.1-0.7 0.1 0.7-2.7 0.5-1.1 1.5-0.7 0-0.5-0.4-0.5-0.5-0.3-0.6 0.3-0.6 0.7-0.6 0.4-0.4-0.3 0-0.6 0.9-0.9 0.3-0.6-0.3-0.7-1.1-0.9-0.7-1.9-1-0.1-2.5 0.4 0.9-1.5 0.3-0.8-0.6-0.3-0.9 0.3-0.8 0.5-0.8 0.3-0.9-0.6 0.8-1-0.2-1-0.6-0.9-0.8-0.8-0.4-0.1-0.4 0.1-0.4-0.1-0.4-0.3-0.1-0.4 0.1-0.9 0-0.3-0.6-1.3-0.3-0.4-0.7-0.5-1.5-0.8-0.4-0.3-0.5-0.5-0.6-1.3-0.5-0.7-0.9-0.7-1.3-0.5-1.3-0.3-0.9 0.4-0.2-1.3-0.2-0.5-0.2 0-0.5 0.4-0.3-0.2-0.2-0.6-0.1-1.8-0.2-0.8-0.4-0.7-3-2.7 2.3-1 1.2-1.4 1.1-3.1 1.1-3.1 0.7-0.9 0.9-0.9 2-0.9 1.9-0.9 1.5-2.5 0.4-0.5 0.3-0.5 1.2-0.4 2.5-0.3 1.1-0.5 1-0.5 1-0.7 1-0.7 1-1 0.5-0.9 0.4-3.7 0.5-3.6-0.1-1.3-0.1-0.9-0.2-0.3-0.3-0.2-0.5-0.7-0.2-0.6 0.3-0.6 0.5-0.4 2.7-1.3 1.1-0.3 1 0.4 0.6-1.6 1.5-1.4 1.5-1 1.6-1 1-0.3 1.7 0.7 0.8-0.1 2.3-1.5 0.8-0.2 1.8 0.3 1.7 0.3 0.7-0.4-0.1-0.8-1-1.8-0.2-0.8 0.4-1 0.4-1 1.5-1.2 3.3-1 3-2.4 2.9-2.3 0.9-1 0.8-0.9 1-0.8 3.9-1.1 3.9-1.1 3.3-0.1 3.2-0.2 2.4-1 1.8-2.1 0.8-1.2 0.9-0.7 1.6-0.6 1.6-0.6 4.9-3.6 0.7-0.9 0.7-0.8 2-3.5 2-3.4 0.8-0.9 1-0.5 1.1-0.4 0.9-0.5 0.8-0.8 0.2-0.7 0.2-0.7 1.4-3.2 1.3-1.1 1.2-1.1 5.7-2.4 0.8 0.1 1.1 0.8 0.9 1 0.5 1.1 0.4 1.4 0.9 0.9 1.2 0.5 1.4 0.2 0.9-0.4 0.9-0.4 1.2-2.3 0.6-1.5 0.5-1.4 1.3-2.6 0.9-0.9 0.8-1 0.6-1.1 0.5-1.4 0.8-1.2 1.4 0 2.7 0.7 2.2-0.3 1.1-0.5 1.1-0.6 3.9-3.2 1.3-1.2 2.5-2 1.9-0.2 1.8 0.8 8.2 5.8 2 0.7-0.8 3-2.2 1.5-4.8 1.4-8.2 6.1-2.4 0.6-2.9-0.1-2.3 0.6-1.1 2.9-0.1 4.5-0.7 1.3-2 0.8-5.8 0.6-1.8 1.1-5.7 4.9-2.5 3-1.7 3.7-1.4 2.1-1.8 1.1-1.9 1-3.4 2.7-9.4 5.6-1.3 2 1.1 2.5 2.1 1.1 8.2 0.9 0.1 0.1 2.1 1.3 1 0.9 0.9 1.1 1.4 2.7 0.9 0.8 1 0z m-64.4 8.3l-0.6-0.7 0.5-0.7-0.6-0.9-0.8-0.5 0.9-1.5-0.3-1.3-2.1-1.4-1.8-0.2-1.4-1-1.9 0.1-3.1 3.1-0.5 2.4-1.5 3.8 0.2 0.1 1-0.5 0.1 0.9 0.4 0.9 1.4 1.6 1-0.9 0 0.3-0.3 0.7 0.7 1.3 1.7 0.5 1.9-2.3 2.9-2.7 2.2-1.1z"
},
{
  inform:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit quidem nihil nesciunt animi ex, quisquam accusamus corrupti, ipsa earum laborum saepe aut ut velit ullam provident! Totam quidem assumenda suscipit quam et nam magni voluptatem velit pariatur quod?',name:"Tashkent",id:"UZB4828", url:"M779 342.2l-2.2 1.1-2.9 2.7-1.9 2.3-1.7-0.5-0.7-1.3 0.3-0.7 0-0.3-1 0.9-1.4-1.6-0.4-0.9-0.1-0.9-1 0.5-0.2-0.1 1.5-3.8 0.5-2.4 3.1-3.1 1.9-0.1 1.4 1 1.8 0.2 2.1 1.4 0.3 1.3-0.9 1.5 0.8 0.5 0.6 0.9-0.5 0.7 0.6 0.7z"
},
   ]
   const map4=map3.map(a=>    <a xlinkTitle={a.name} key={a.id} onClick={()=>setstate(a.name) }>
   <path  d={a.url} id={a.id}  name={a.name}>
</path> </a>)
  return (
    <span className={style.MapcLICK} >
   
<svg className={style.Map2}  data-aos="fade-up" data-aos-duration="1000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" version="1.2" viewBox="0 0 1000 652"  xmlns="http://www.w3.org/2000/svg">
       {map4}
     <circle cx="673.4" cy="626" id="0">
     </circle>
     <circle cx="637.6" cy="506" id="1">
     </circle>
     <circle cx="636" cy="498.9" id="2">
     </circle>
</svg>
<div className={style.MapName}>
 
  <h1><RoomIcon/>  {state}</h1>
  <a><img src={img1}/>  ЭЛЕКТРОЭНЕРГЕТИКА</a>
</div>
    </span>
)
};
export default Map2