
import styles from "./SearchPage.module.css";
import { Optioncard } from "./OptionCard";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import Footer from "./Footer.js";
import AppHeader from './Header';


import React from 'react'

function SearchPage() {
  return (
    <div className="sd">
        <AppHeader />
        <div
                style={{
                    paddingTop: "50px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                }}
            >
                <div style={{ display: "flex" }}>
                    <div className={styles.area}>
                        <form className={styles.forms} action="">
                        <div className={styles.deb2}>
                                <div className={styles.search}>
                                    <div className={styles.lab}>What?</div>
                                    <div className={styles.inp}>
                                        <input
                                            type="text"
                                            placeholder="Job titles,tags or company"
                                            className={styles.inpu}
                                        />
                                    </div>
                                    <div style={{ paddingRight: "0rem" }}>
                                        <MdLocationOn />{" "}
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={styles.deb2}>
                                <div className={styles.search}>
                                    <div className={styles.lab}>Where?</div>
                                    <div className={styles.inp}>
                                        <input
                                            type="text"
                                            placeholder="City,state,or pin code"
                                            className={styles.inpu}
                                        />
                                    </div>
                                    <div style={{ paddingRight: "0rem" }}>
                                        <MdLocationOn />{" "}
                                    </div>
                                    
                                </div>
                            </div>
                        </form>
                        <button className={styles.btn} ><Link className="link" to="/companyPage">Find jobs</Link></button>
                    </div>
                </div>
                <div className={styles.contain}>
                    <div className={styles.post}>
                        <span className={styles.highlight}>Post your resume -</span>
                        <span className={styles.para}> It only takes a few seconds</span>
                    </div>
                </div>
                <div className={styles.contain1}>
                    <div className={styles.post1}>
                        <span className={styles.highlight}>Employers: Post a job -</span>
                        <span className={styles.para}>Your next hire is here</span>
                    </div>
                </div>
                <div className={styles.empty1}></div>
                <div className={styles.searchTitle}>
                    <h2>Popular searches</h2>
                    <div className={styles.options}>
                        <Optioncard title="Android Developer" />
                        <Optioncard title="Online Typing" />
                        <Optioncard title="Flutter" />
                        <Optioncard title="BlockChain Developer" />
                        <Optioncard title="Full Stack Deveolper" />
                        <Optioncard title="FrontEnd Developer" />
                        <Optioncard title="Product Manager" />
                        <Optioncard title="Python Developer" />
                        <Optioncard title="AI / ML" />
                        <Optioncard title="Cyber Security" />
                    </div>
                    <div className={styles.empty2}></div>
                </div>
                






        </div>
        <Footer />
      
    </div>
  )
}

export default SearchPage
