import React from 'react'
import Package_search from '../components/packageSearch/Package_search'

function Packages() {
	return (
		<div className='content'>
			<Package_search></Package_search>
			<div>
				<p>15133 matching packages found. Page 1 of 152.</p>
				<div class='pkglist-nav'>
					<span class='prev'>&lt; Prev</span>
					<span class='next'>
						<a href='?page=2&amp;' title='Go to next page' rel='next'>
							Next &gt;
						</a>
					</span>
				</div>
				<input
					type='hidden'
					name='csrfmiddlewaretoken'
					value='7GAfvRTuD4Kum6Y3Nvnt9tJuKBT3Gxi1D9ja3TEiD6MUnu1KA1wiJpCGHyaHl73j'
				/>
				<table class='results'>
					<thead>
						<tr>
							<th>
								<a
									href='/packages/?sort=arch'
									title='Sort packages by architecture'
								>
									Arch
								</a>
							</th>
							<th>
								<a
									href='/packages/?sort=repo'
									title='Sort packages by repository'
								>
									Repo
								</a>
							</th>
							<th>
								<a
									href='/packages/?sort=pkgname'
									title='Sort packages by package name'
								>
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
								<a
									href='/packages/extra/x86_64/0ad/'
									title='View package details for 0ad'
								>
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
								<a
									href='/packages/extra/any/0ad-data/'
									title='View package details for 0ad-data'
								>
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
								<a
									href='/packages/extra/x86_64/389-ds-base/'
									title='View package details for 389-ds-base'
								>
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
								<a
									href='/packages/extra/x86_64/3cpio/'
									title='View package details for 3cpio'
								>
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
