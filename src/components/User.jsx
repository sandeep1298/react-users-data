import React from 'react'
import data from './profile.json'
import picture from '../images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default function User() {
  return (
        <>
            <div className="container-fluid">
                <div className="row p-4 ">
                    <div className="col-lg-5 col-md-5 col-12 col-sm-12 bg_grey">
                        <div className="text-center pt-5 pb-3">
                            <img src={picture} className="img-fluid border" alt='person' width={250} height={250}/>
                        </div>
                        <div className='text-center'>
                            <h1 className="font-weight-bold  text_primary">{data.user.first_name} {''} {data.user.last_name}</h1>
                            <h5 className="text_black font-weight-bold">{data.user.title}</h5>
                        </div> 
                        <div className="pt-5 ">
                            <h6 className=' font-weight-bold pl-4'><u>ABO</u>UT ME</h6>
                            <p className='grey-text text-justify p-4'>{data.user.about}</p>
                        </div>  
                        <div className="pt-5 p-4">
                            {data.skills.map((detail)=>{
                                return(
                                    <>
                                        <h6 className="pt-3 font-weight-bold text-uppercase">{detail.name}</h6>
                                        <Progress 
                                        theme={{
                                            active:{
                                                color:"gray"
                                            }
                                        }}
                                         percent={detail.value}
                                        />
                                    </>
                                )
                            })}
                        </div> 
                        <div className="pt-5 p-4">
                            <h6 className=' font-weight-bold'><u>CON</u>TACTS</h6>
                            <p className='grey-text  pt-2'>{data.user.email}</p>
                            <p className='grey-text '>{data.user.phone}</p>
                        </div>  
                    </div>
                    <div className="col-lg-7 col-md-7 col-12 col-sm-12  pl-lg-5">
                        <div className="pt-5 p-4">
                            <h6 className=' font-weight-bold'><u>EDU</u>CATION</h6>
                            <div className="pt-3 row">
                                {data.education.map((detail)=>{
                                    return(
                                        <>
                                            <div className="col-lg-10 col-md-10 col-10 col-sm-10 ">
                                                <h6 className=" font-weight-bold text-uppercase pt-2">{detail.title} </h6>
                                                <p className='grey-text font-weight-bold pt-2'>{detail.institute}</p>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-2 col-sm-2 p-2 text-center">
                                                <h6 className=" font-weight-bold ">{detail.year}</h6>
                                            </div>
                                        </>
                                    )
                                })}
                            </div> 
                        </div> 
                        <div className="pt-5 p-4 ">
                            <h6 className=' font-weight-bold'><u>LAN</u>GUAGES</h6>
                            <div className="row pt-3">
                                {data.languages.map((detail)=>{
                                    return(
                                        <>
                                            <div className="col-lg-4 col-md-4 col-6 col-sm-4 text-center">
                                                <h6 className="pt-3 font-weight-bold text-uppercase pb-2">{detail.language}</h6>
                                                <Progress 
                                                theme={{
                                                    active:{
                                                        color:"dimgray"
                                                    }
                                                }}
                                                width={100}
                                                type="circle"
                                                percent={detail.value}
                                                />
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="pt-5 p-4 ">
                            <h6 className=' font-weight-bold'><u>EXP</u>ERIENCE</h6>
                            <div className="row pt-3">
                                {data.experience.map((detail)=>{
                                    return(
                                        <>
                                            <div className="col-lg-10 col-md-10 col-10 col-sm-10 ">
                                                <h6 className=" font-weight-bold text-uppercase pt-2">{detail.title} </h6>
                                                <p className='grey-text font-weight-bold pt-2'>{detail.description}</p>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-2 col-sm-2 p-2 text-center">
                                                <h6 className=" font-weight-bold ">{detail.year}</h6>
                                            </div>    
                                        </>
                                    )
                                })}
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </>
        )
    }

 