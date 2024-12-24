import React from 'react';
import classes from "./Home.module.css";

import  donat from "../../src/img/donat.png";  
import  hetz from "../../src/img/hetz.png";  
import  ico from "../../src/img/ico.png";  
import  shells from "../../src/img/shells.png";  

function Home() {
    return (
        <>
            <div className={classes.margin_div}></div>
            <div className={classes.home__container}>
                <div className={classes.home__left}>
                    <div className={classes.dist}>
                        <h2>A simple, lightweight distribution</h2>
                        <p id="content">You've reached the website for <b>Arch Linux</b>, a lightweight and flexible Linux® distribution that tries to Keep It Simple.</p>
                        <p>Currently we have official packages optimized for the x86-64 architecture. We complement our official package sets with a <a href="#">community-operated package repository</a> that grows in size and quality each and every day.</p>
                        <p>Our strong community is diverse and helpful, and we pride ourselves on the range of skillsets and uses for Arch that stem from it. Please check out our <a>forums</a> and <a>mailing lists</a> to get your feet wet. Also glance through our wiki if you want to learn more about Arch.</p>
                        <p className={classes.p_more}><a>Learn more...</a></p>
                    </div>
                    <div className={classes.margin_div}></div>
                    <div className={classes.news}>
                        <h3><a href="#">Latest news</a> <span className={classes.arrow}></span></h3> 
                    
                        <h4><a href="#">Providing a license for package sources</a></h4> <p className={classes.time}>Nov. 19, 2024</p> 
                        <p>Arch Linux hasn't had a license for any package sources (such as PKGBUILD files) in the past, which is potentially problematic. Providing a license will preempt that uncertainty. </p>
                        <p><a href="#">In RFC 40</a> we agreed to change all package sources to be licensed under the very liberal <a href="#">0BSD</a> license. <b>This change will not limit what you can do with package sources.</b> Check out <a href="#">the RFC</a> for more on the rationale and prior discussion.</p>
                        <p>Before we make this change, we will provide contributors with a way to voice any objections they might have. Starting on 2024-11-19, over the course of a week, contributors will receive a single notification email listing all their contributions.</p>
                        <ul type="square">
                            <li> If you receive an email and agree to this change, there is no action required from your side.</li>
                            <li>If you do not agree, please reply to the email and we'll find a solution together.</li>
                        </ul>
                        <p>If you contributed to Arch Linux packages before but didn't receive an email, please contact us at package-sources-licensing@archlinux.org.</p>
                        {/*  */}
                        <h4><a href="#">Manual intervention for pacman 7.0.0 and local repositories required</a></h4> <p className={classes.time}>Sept. 14, 2024</p>
                        <p>With the release of <a href="#">version 7.0.0</a> pacman has added support for downloading packages as a separate user with dropped privileges.</p>
                        <p>For users with local repos however this might imply that the download user does not have access to the files in question, which can be fixed by assigning the files and folder to the <code>alpm</code> group and ensuring the executable bit (<code>+x</code>) is set on the folders in question.</p>
                        <pre>
                            <code>$ chown :alpm -R /path/to/local/repo</code>
                        </pre>
                        <p>Remember to <a href="#">merge the .pacnew</a> files to apply the new default.</p>
                        <p>Pacman also introduced <a href="#">a change</a> to improve checksum stability for git repos that …</p>
                        {/*  */}
                        <h4><a href="#">The sshd service needs to be restarted after upgrading to openssh-9.8p1</a></h4> <p className={classes.time}>July 1, 2024</p>
                        <p>After upgrading to <code>openssh-9.8p1</code>, the existing SSH daemon will be unable to accept new connections (see <a href="#">https://gitlab.archlinux.org/archlinux/packaging/packages/openssh/-/issues/5</a>).
                        <br></br>When upgrading remote hosts, please make sure to restart the sshd service using <code>systemctl try-restart sshd</code> right after upgrading.</p>
                        <p>We are evaluating the possibility to automatically apply a restart of the sshd service on upgrade in a future release of the openssh-9.8p1 package.</p>
                        {/*  */}
                        <h4><a href="#">Arch Linux 2024 Leader Election Results</a></h4> <p className={classes.time}>April 15, 2024</p>
                        <p>Recently we held our leader election, and the previous Project Leader Levente "anthraxx" Polyák ran again while no other people were nominated for the role.</p>
                        <p>As per <a href="#">our election rules</a> he is re-elected for a new term.</p>
                        <p>The role of of the project lead within Arch Linux is connected to <a href="#">a few responsibilities</a> regarding decision making (when no consensus can be reached), handling financial matters with SPI and overall project management tasks.</p>
                        <p><strong>Congratulations to Levente and all the best wishes for another successful term! 🥳</strong></p>
                        {/*  */}
                        <h4><a href="#">Increasing the default vm.max_map_count value</a></h4> <p className={classes.time}>April 7, 2024</p>
                        <p>The <a href="#">vm.max_map_count</a> parameter will be increased from the default <code>65530</code> value to <code>1048576</code>.</p>
                        <p>This change should help address performance, crash or start-up issues for a number of memory intensive applications, particularly for (but not limited to) <a href="a">some Windows games</a> played through Wine/Steam Proton. Overall, end users should have a smoother experience out of the box with no expressed concerns about potential downsides in <a href="#">the related proposal on arch-dev-public mailing list.</a></p>
                        <p>This <code>vm.max_map_count</code> increase is introduced in the <code>2024.04.07-1</code> release of the <a href="#">filesystem package</a> and will be effective right after the upgrade.</p>
                        <p>Before upgrading, in case you are already …</p>
                        <div className={classes.margin_div}></div>
                        <h3><a href="#">Older news</a> <span className={classes.arrow}></span></h3> 

                        <dl>
                            <dt>March 29, 2024</dt>
                            <dd><a href="#">The xz package has been backdoored </a></dd>
                            <dt>March 4, 2024</dt>
                            <dd><a href="#">mkinitcpio hook migration and early microcode  </a></dd>
                            <dt>Jan. 9, 2024</dt>
                            <dd><a href="#">Making dbus-broker our default D-Bus daemon  </a></dd>
                        </dl>
                    </div>
                </div>
                <div className={classes.home__right}>
                    <div className={classes.search}>
                        <label className={classes.search__label}>Package Search</label>
                        <input className={classes.search__input}></input>
                    </div>
                    <div className={classes.margin_div}></div>
                    <div className={classes.update}>
                        <h3><b>Recent Updates </b>(<a href="#">more</a>)</h3>
                        <table>
                            <tr>
                                <td>
                                    <span>naev 0.12.0-1</span>
                                </td>
                                <td>
                                    <a href="#">x86_64</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>plasma-firewall 6.2.4-2</span>
                                </td>
                                <td>
                                    <a href="#">x86_64</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>hugo 0.140.1-1</span>
                                </td>
                                <td>
                                    <a href="#">x86_64</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={classes.margin_div}></div>
                    <div className={classes.widget}>
                        <h4>Documentation</h4>
                        <ul>
                            <li><a href="#">Wiki</a></li>
                            <li><a href="#">Manual Pages</a></li>
                            <li><a href="#">Installation Guide</a></li>
                        </ul>
                        <h4>Community</h4>
                        <ul>
                            <li><a href="#">Mailing Lists</a></li>
                            <li><a href="#">IRC Channels</a></li>
                            <li><a href="#">Planet Arch</a></li>
                            <li><a href="#">International Communities</a></li>
                        </ul>
                    </div>
                    <img className={classes.img} src={donat}></img>
                    <img className={classes.img} src={hetz}></img>
                    <img className={classes.img} src={ico}></img>
                    <img className={classes.img} src={shells}></img>
                </div>
            </div>
        <footer>
            <p>Copyright © 2002-2024 <a href="#">Judd Vinet</a>, <a href="#">Aaron Griffin</a> and <a href="#">Levente Polyák</a>.</p> <br></br>
            <p>The Arch Linux name and logo are recognized <a href="#">trademarks</a>. Some rights reserved.</p> <br></br>
            <p>The registered trademark Linux® is used pursuant to a sublicense from LMI, the exclusive licensee of Linus Torvalds, owner of the mark on a world-wide basis.</p>
        </footer>
        </>
    );
}

export default Home;