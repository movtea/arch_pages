import React from 'react'
import classes from './Forumes.module.css'

function outputData() {
	document
		.getElementsByTagName('form')[0]
		.addEventListener('submit', function (event) {
			event.preventDefault()
		})
	if (checkName() && checkEmail() && checkPass()) {
		alert('ОК')
	} else {
		alert('Ошибка заполнения данных')
	}
}

function checkName() {
	var name = document.getElementById('name').value
	var regex = /^[a-zA-Z\s]{2,15}$/

	if (regex.test(name)) {
		document.getElementById('name').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('name').style.boxShadow = '10px 0px 0px red'
		return false
	}
}

function checkEmail() {
	var email = document.getElementById('email').value
	var regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (regex.test(email)) {
		document.getElementById('email').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('email').style.boxShadow = '10px 0px 0px red'
		return false
	}
}

function checkPass() {
	var email = document.getElementById('pass').value
	var regex = /^[a-zA-Z\s]{6,20}$/

	if (regex.test(email)) {
		document.getElementById('pass').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('pass').style.boxShadow = '10px 0px 0px red'
		return false
	}
}

function Forumes() {
	return (
		<>
			<div className={classes.reg__cont}>
				<div className={classes.norm}>
					<div className={classes.reg}>
						<div className={classes.regHead}>
							<div>
								<ul className={classes.regHeadLink}>
									<li>
										<a href='#'>Index</a>
									</li>
									<li>
										<a href='#'>Rules</a>
									</li>
									<li>
										<a href='#'>Search</a>
									</li>
									<li>
										<a href='#'>Register</a>
									</li>
									<li>
										<a href='#'>Login</a>
									</li>
								</ul>
							</div>
							<div className={classes.con_div}>
								<p className={classes.conl}>You are not logged in.</p>
								<ul className={classes.conr}>
									<li>
										<span>
											Topics:
											<a href='#' title='Find topics with recent posts.'>
												Active
											</a>
											|
											<a href='#' title='Find topics with no replies.'>
												Unanswered
											</a>
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className={classes.regBody}>
							<h2>Register</h2>
							<form>
								<div className={classes.info}>
									<h3>Important information</h3>
									<p>
										Registration will grant you access to a number of features
										and capabilities otherwise unavailable. These functions
										include the ability to edit and delete posts, design your
										own signature that accompanies your posts and much more. If
										you have any questions regarding this forum you should ask
										an administrator.
									</p>
									<p>
										Below is a form you must fill out in order to register. Once
										you are registered you should visit your profile and review
										the different settings you can change. The fields below only
										make up a small part of all the settings you can alter in
										your profile.
									</p>
								</div>
								<span>
									Please enter a username between 2 and 25 characters long
								</span>
								<div className={classes.inDiv}>
									<strong>Username</strong>
									<input
										type='text'
										name='req_user'
										size='25'
										maxLength='25'
										id='name'
										onBlur={checkName}
									></input>
								</div>
								<span>Enter and confirm a valid email address</span>
								<div className={classes.inDiv}>
									<p>
										You must enter a valid email address as your randomly
										generated password will be sent to that address.
									</p>
									<strong>Email</strong>
									<input
										type='email'
										size='50'
										id='email'
										className={classes.emailInput}
										maxLength='80'
										onBlur={checkEmail}
									></input>
								</div>
								<span>Enter and confirm a valid password</span>
								<div className={classes.inDiv}>
									<strong>Password</strong>
									<input
										type='password'
										size='50'
										id='pass'
										maxLength='80'
										onBlur={checkPass}
									></input>
								</div>
								<span>Set your privacy options</span>
								<div className={classes.inDiv}>
									<p>
										Select whether you want your email address to be viewable to
										other users or not and if you want other users to be able to
										send you email via the forum (form email) or not.
									</p>
									<br></br>
									<p>
										<input
											type='radio'
											name='email_setting'
											defaultChecked={true}
											value='0'
										></input>
										Display your email address to other users.
									</p>
									<br></br>
									<p>
										<input type='radio' name='email_setting' value='1'></input>
										Hide your email address but allow form email.
									</p>
									<br></br>
									<p>
										<input type='radio' name='email_setting' value='2'></input>
										Hide your email address and disallow form email.
									</p>
								</div>
								<div className={classes.inDiv}>
									<button onClick={outputData}>Send</button>
								</div>
							</form>
						</div>
						<div className={classes.regFooter}></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Forumes
