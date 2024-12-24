import React from 'react'
import classes from './Package_search.module.css'

function outputData() {
	document
		.getElementsByTagName('form')[0]
		.addEventListener('submit', function (event) {
			event.preventDefault()
		})
	if (checkArch() && checkRepo() && checkQ() && checkMain() && checkFlagged()) {
		alert(
			`Arch: ${document.getElementById('id_arch').value}\n Repository:${
				document.getElementById('id_repo').value
			}\n Keywords: ${document.getElementById('id_q').value}\n Maintainer: ${
				document.getElementById('id_q').value
			}\n Flagged: ${document.getElementById('id_flagged').value}`
		)
	} else {
		alert('Ошибка заполнения данных')
	}
}

function checkArch() {
	var val = document.getElementById('id_arch').value

	if (val) {
		document.getElementById('id_arch').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('id_arch').style.boxShadow = '10px 0px 0px red'
		return false
	}
}

function checkRepo() {
	var val = document.getElementById('id_repo').value

	if (val) {
		document.getElementById('id_repo').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('id_repo').style.boxShadow = '10px 0px 0px red'
		return false
	}
}

function checkQ() {
	var val = document.getElementById('id_q').value
	var regex = /^[a-zA-Z\s]{2,15}$/

	if (regex.test(val)) {
		document.getElementById('id_q').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('id_q').style.boxShadow = '10px 0px 0px red'
		return false
	}
}

function checkMain() {
	var val = document.getElementById('id_main').value

	if (val) {
		document.getElementById('id_main').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('id_main').style.boxShadow = '10px 0px 0px red'
		return false
	}
}

function checkFlagged() {
	var val = document.getElementById('id_flagged').value

	if (val) {
		document.getElementById('id_flagged').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('id_flagged').style.boxShadow = '10px 0px 0px red'
		return false
	}
}

function Package_search() {
	return (
		<div className={classes.box}>
			<h2>Package Search</h2>
			<form>
				<div className='row'>
					<div className='col-md-1 ${classes.filter_div}'>
						<label>Arch</label>
						<select
							id='id_arch'
							className={classes.filter_section}
							multiple='multiple'
							onBlur={checkArch}
						>
							<option value='any'>any</option>
							<option value='x86_64'>x86_64</option>
						</select>
					</div>
					<div className='col-md-1 ${classes.filter_div}'>
						<label>Repository</label>
						<select
							id='id_repo'
							className={classes.filter_section}
							multiple='multiple'
							onBlur={checkRepo}
						>
							<option value='Core'>Core</option>
							<option value='Core-Testing'>Core-Testing</option>
							<option value='Gnome-Unstable'>Gnome-Unstable</option>
							<option value='KDE-Unstable'>KDE-Unstable</option>
						</select>
					</div>
					<div className='col-md-2 ${classes.filter_div}'>
						<label>Keywords</label>
						<input
							type='text'
							maxLength='100'
							id='id_q'
							className={classes.filter_section}
							onBlur={checkQ}
						/>
					</div>
					<div className='col-md-2 ${classes.filter_div}'>
						<label>Maintainer</label>
						<select
							id='id_main'
							className={classes.filter_section}
							onBlur={checkMain}
						>
							<option value='all'>All</option>
							<option value='orphan'>Orphan</option>
							<option value='alex19EP'>Alexander Epaneshnikov</option>
							<option value='arodseth'>Alexander Rødseth</option>
						</select>
					</div>
					<div className='col-md-1 ${classes.filter_div}'>
						<label>Flagged</label>
						<select
							id='id_flagged'
							className={classes.filter_section}
							onBlur={checkFlagged}
						>
							<option value='all'>All</option>
							<option value='Flagged'>Flagged</option>
							<option value='Not Flagged'>Not Flagged</option>
						</select>
					</div>
					<div className='col-md-1 ${classes.filter_div}'>
						<button onClick={outputData}>Search</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Package_search
