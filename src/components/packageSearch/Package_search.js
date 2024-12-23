import React from 'react'
import classes from './Package_search.module.css'

function Package_search() {
	return (
		<div className={classes.box}>
			<h2>Package Search</h2>
			<form>
				<div className='row'>
					<div className='col-md-1 ${classes.filter_div}'>
						<label>Arch</label>
						<select id={classes.id_arch} multiple='multiple'>
							<option value='any'>any</option>
							<option value='x86_64'>x86_64</option>
						</select>
					</div>
					<div className='col-md-1 ${classes.filter_div}'>
						<label>Repository</label>
						<select id={classes.id_repo} multiple='multiple'>
							<option value='Core'>Core</option>
							<option value='Core-Testing'>Core-Testing</option>
							<option value='Gnome-Unstable'>Gnome-Unstable</option>
							<option value='KDE-Unstable'>KDE-Unstable</option>
						</select>
					</div>
					<div className='col-md-2 ${classes.filter_div}'>
						<label>Keywords</label>
						<input type='text' maxlength='100' id={classes.id_q} />
					</div>
					<div className='col-md-2 ${classes.filter_div}'>
						<label>Maintainer</label>
						<select id={classes.main}>
							<option value='all'>All</option>
							<option value='orphan'>Orphan</option>
							<option value='alex19EP'>Alexander Epaneshnikov</option>
							<option value='arodseth'>Alexander Rødseth</option>
						</select>
					</div>
					<div className='col-md-1 ${classes.filter_div}'>
						<label>Flagged</label>
						<select id={classes.flagged}>
							<option value='all'>All</option>
							<option value='Flagged'>Flagged</option>
							<option value='Not Flagged'>Not Flagged</option>
						</select>
					</div>
					<div className='col-md-1 ${classes.filter_div}'>
						<br></br>
						<input id={classes.sub} type='submit' value='Search' />
					</div>
				</div>
			</form>
		</div>
	)
}

export default Package_search
