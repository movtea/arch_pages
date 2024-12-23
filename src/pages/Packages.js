import React from 'react'
import Package_search from '../components/packageSearch/Package_search'
import classes from './Packages.module.css'

function Packages() {
	return (
		<div className={classes.content}>
			<Package_search></Package_search>
			<div className={classes.box}>
				<p>8 matching packages found. Page 1 of 1.</p>
				<div className={classes.pkglist_nav}>
					<span className={classes.prev}>&lt; Prev</span>
					<span class='next'>
						<a href='#'>Next &gt;</a>
					</span>
				</div>
				<table>
					<thead>
						<tr>
							<th>
								<a href='#' title='Sort packages by architecture'>
									Arch
								</a>
							</th>
							<th>
								<a href='#' title='Sort packages by repository'>
									Repo
								</a>
							</th>
							<th>
								<a href='#' title='Sort packages by package name'>
									Name
								</a>
							</th>
							<th>Version</th>
							<th>Description</th>
							<th>
								<a
									href='/packages/?sort=-last_update'
									title='Sort packages by last update'
								>
									Last Updated
								</a>
							</th>
							<th>
								<a
									href='/packages/?sort=-flag_date'
									title='Sort packages by when marked-out of-date'
								>
									Flag Date
								</a>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>x86_64</td>
							<td>Extra</td>
							<td>
								<a href='#' title='View package details for 0ad'>
									0ad
								</a>
							</td>

							<td>a26-18</td>

							<td class='wrap'>
								Cross-platform, 3D and historically-based real-time strategy
								game
							</td>
							<td>Nov. 25, 2024</td>
							<td></td>
						</tr>

						<tr>
							<td>any</td>
							<td>Extra</td>
							<td>
								<a href='#' title='View package details for 0ad-data'>
									0ad-data
								</a>
							</td>

							<td>a26-2</td>

							<td class='wrap'>
								Cross-platform, 3D and historically-based real-time strategy
								game (data files)
							</td>
							<td>July 16, 2024</td>
							<td></td>
						</tr>

						<tr>
							<td>x86_64</td>
							<td>Extra</td>
							<td>
								<a href='#' title='View package details for 389-ds-base'>
									389-ds-base
								</a>
							</td>

							<td>3.1.1-2</td>

							<td class='wrap'>389 Directory Server (base)</td>
							<td>Dec. 22, 2024</td>
							<td></td>
						</tr>

						<tr>
							<td>x86_64</td>
							<td>Extra</td>
							<td>
								<a href='#' title='View package details for 3cpio'>
									3cpio
								</a>
							</td>

							<td>0.3.2-1</td>

							<td class='wrap'>
								Manage Linux kernel initramfs cpio files written in Rust
							</td>
							<td>Aug. 20, 2024</td>
							<td></td>
						</tr>
						<tr>
							<td>x86_64</td>
							<td>Extra</td>
							<td>
								<a href='#' title='View package details for 3cpio'>
									3cpio
								</a>
							</td>

							<td>0.3.2-1</td>

							<td class='wrap'>
								Manage Linux kernel initramfs cpio files written in Rust
							</td>
							<td>Aug. 20, 2024</td>
							<td></td>
						</tr>
						<tr>
							<td>x86_64</td>
							<td>Extra</td>
							<td>
								<a href='#' title='View package details for 3cpio'>
									3cpio
								</a>
							</td>

							<td>0.3.2-1</td>

							<td class='wrap'>
								Manage Linux kernel initramfs cpio files written in Rust
							</td>
							<td>Aug. 20, 2024</td>
							<td></td>
						</tr>
						<tr>
							<td>x86_64</td>
							<td>Extra</td>
							<td>
								<a href='#' title='View package details for 3cpio'>
									3cpio
								</a>
							</td>

							<td>0.3.2-1</td>

							<td class='wrap'>
								Manage Linux kernel initramfs cpio files written in Rust
							</td>
							<td>Aug. 20, 2024</td>
							<td></td>
						</tr>
						<tr>
							<td>x86_64</td>
							<td>Extra</td>
							<td>
								<a href='#' title='View package details for 3cpio'>
									3cpio
								</a>
							</td>

							<td>0.3.2-1</td>

							<td class='wrap'>
								Manage Linux kernel initramfs cpio files written in Rust
							</td>
							<td>Aug. 20, 2024</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Packages
