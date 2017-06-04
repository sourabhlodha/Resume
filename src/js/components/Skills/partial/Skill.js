import React from 'react';
import Button from '../../../shared/Button';
import { Line, Circle } from 'rc-progress';


const Skill = () => (
  <div className="inner">
          <h2>Skills</h2>
          <div className="title-divider"></div>
          <h3>Just My Awesome Skills</h3>
          <p></p>
          <div className="skills-con">
            <div className="container-sub margin-top50">
              <h3>Languages</h3>
              <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>Java</div>
                    <Line strokeWidth="2" percent='85 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                   <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>C</div>
                    <Line strokeWidth="2" percent='70 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>

                  
                  
                  </div>
                  <h3>Front End Frameworks</h3>
                  <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>React Js</div>
                    <Line strokeWidth="2" percent='85 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                  <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>Angular Js</div>
                    <Line strokeWidth="2" percent='65 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                  <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>Bootstrap</div>
                    <Line strokeWidth="2" percent='85 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                  <h3>DataBase</h3>
                  <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>My Sql</div>
                    <Line strokeWidth="2" percent='80 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                   <h3>Cloud Deployement </h3>
                     <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>Aws(Amazon)</div>
                    <Line strokeWidth="2" percent='85 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                   <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>Heroku</div>
                    <Line strokeWidth="2" percent='85 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                  <h3>Java Technologie </h3>
                     <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>Spring Boot Application</div>
                    <Line strokeWidth="2" percent='85 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                   <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>RestFul API (Micro Services)</div>
                    <Line strokeWidth="2" percent='85 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                  <h3>Automation</h3>
                  <div className="row">
              
                   <div className="col-md-offset-3 col-md-9">
                   <div className='padding'>Selenium</div>
                    <Line strokeWidth="2" percent='80 ' strokeColor='#7dba5c' className="chart canvas " />
                    
                  </div>
                  
                  </div>
                  
               
                 
                </div>
              </div>
        
        

  </div>
);

export default Skill ;