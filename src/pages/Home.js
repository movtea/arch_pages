import React from 'react';
import classes from "./Home.module.css";

function Home() {
    return (
        <>
            <div className={classes.margin_div}></div>
            <div className={classes.home__container}>
                <div className={classes.home__left}>
                    <div className={classes.dist}>
                        <h2>A simple, lightweight distribution</h2>
                        <p id="content">You've reached the website for <b>Arch Linux</b>, a lightweight and flexible Linux® distribution that tries to Keep It Simple.</p>
                        <p>Currently we have official packages optimized for the x86-64 architecture. We complement our official package sets with a community-operated package repository that grows in size and quality each and every day.</p>
                        <p>Our strong community is diverse and helpful, and we pride ourselves on the range of skillsets and uses for Arch that stem from it. Please check out our forums and mailing lists to get your feet wet. Also glance through our wiki if you want to learn more about Arch.</p>
                    </div>
                </div>
                <div className={classes.home__right}>
                    <div>
                        <span>Package Search</span>
                        <input></input>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;