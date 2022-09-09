import AboutUs from 'containers/AboutUs';
import Hero from 'containers/Hero';
import Menu from 'containers/Menu';
import MenuTitle from 'containers/MenuTitle';

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs />
			<MenuTitle />
			<Menu />
			{/* Start */}

			{/*end section*/}
			{/* End */}
			{/* Start Booking Table */}
			<section
				className='relative md:py-24 py-16  bg-no-repeat bg-fixed bg-top'
				id='table'
			>
				<div className='absolute inset-0 bg-black/50' />
				<div className='container'>
					<div className='flex justify-end'>
						<div className='lg:w-1/2 md:w-2/3'>
							<div className='bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md lg:p-12 p-6 lg:ml-12'>
								<div className='section-title mb-4'>
									<span className='bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5'>
										Reservation
									</span>
									<h4 className='text-4xl font-bold uppercase my-4'>
										Book A Table
									</h4>
									<p className='text-slate-400 mx-auto para-desc'>
										We make it a priority to offer flexible services to
										accomodate your needs
									</p>
								</div>
								<form>
									<div className='grid md:grid-cols-2 gap-4 mt-6'>
										<div>
											<label className='font-semibold'>Your Name</label>
											<input
												name='name'
												id='name'
												type='text'
												className='form-input mt-2'
												placeholder='First Name :'
											/>
										</div>
										<div>
											<label className='font-semibold'>Your Email</label>
											<input
												name='email'
												id='email'
												type='email'
												className='form-input mt-2'
												placeholder='Your email :'
											/>
										</div>
										<div>
											<label className='font-semibold'>Phone no.</label>
											<input
												name='number'
												type='number'
												id='phone-number'
												className='form-input mt-2'
												placeholder='Phone no. :'
											/>
										</div>
										<div>
											<label className='font-semibold'>Person</label>
											<input
												type='number'
												min={0}
												autoComplete='off'
												id='adult'
												className='form-input mt-2'
												required=''
												placeholder='Person :'
											/>
										</div>
										<div>
											<label className='font-semibold'>Date</label>
											<input
												name='date'
												type='text'
												className='form-input mt-2 start'
												placeholder='(ex: mm/ dd/ yy)'
											/>
										</div>
										<div>
											<label className='font-semibold'>Time</label>
											<input
												name='time'
												type='text'
												id='input-time'
												className='form-input mt-2 timepicker'
												placeholder='(ex: 8:00 p.m)'
											/>
										</div>
									</div>
									{/*end grid*/}
									<div className='grid grid-cols-1 mt-4'>
										<input
											type='submit'
											id='submit'
											name='send'
											className='btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full'
											defaultValue='Book a table'
										/>
									</div>
									{/*end grid*/}
								</form>
								{/*end form*/}
							</div>
						</div>
						{/*end col*/}
					</div>
					{/*end grid*/}
				</div>
				{/*end container*/}
			</section>
			{/*end section*/}
			{/* End Booking Table */}
			{/* Start */}
			<section className='relative md:py-24 py-16 bg-indigo-600/5'>
				<div className='container'>
					<div className='grid grid-cols-1 pb-8 text-center'>
						<h3 className='mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'>
							Happy Client's
						</h3>
						<p className='text-slate-400 max-w-xl mx-auto'>
							Splash your dream color Bring your home to lively Colors. We make
							it a priority to offer flexible services to accomodate your needs
						</p>
					</div>
					{/*end grid*/}
					<div className='grid grid-cols-1 mt-8'>
						<div className='tiny-three-item'>
							<div className='tiny-slide text-center'>
								<div className='customer-testi'>
									<div className='content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900'>
										<i className='mdi mdi-format-quote-open mdi-48px text-indigo-600' />
										<p className='text-slate-400'>
											" It seems that only fragments of the original text remain
											in the Lorem Ipsum texts used today. "
										</p>
										<ul className='list-none mb-0 text-amber-400 mt-3'>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
										</ul>
									</div>
									<div className='text-center mt-5'>
										<img
											src='assets/images/client/01.jpg'
											className='h-14 w-14 rounded-full shadow-md mx-auto'
											alt=''
										/>
										<h6 className='mt-2 font-semibold'>Calvin Carlo</h6>
										<span className='text-slate-400 text-sm'>Manager</span>
									</div>
								</div>
							</div>
							<div className='tiny-slide text-center'>
								<div className='customer-testi'>
									<div className='content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900'>
										<i className='mdi mdi-format-quote-open mdi-48px text-indigo-600' />
										<p className='text-slate-400'>
											" The most well-known dummy text is the 'Lorem Ipsum',
											which is said to have originated in the 16th century. "
										</p>
										<ul className='list-none mb-0 text-amber-400 mt-3'>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
										</ul>
									</div>
									<div className='text-center mt-5'>
										<img
											src='assets/images/client/02.jpg'
											className='h-14 w-14 rounded-full shadow-md mx-auto'
											alt=''
										/>
										<h6 className='mt-2 font-semibold'>Christa Smith</h6>
										<span className='text-slate-400 text-sm'>Manager</span>
									</div>
								</div>
							</div>
							<div className='tiny-slide text-center'>
								<div className='customer-testi'>
									<div className='content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900'>
										<i className='mdi mdi-format-quote-open mdi-48px text-indigo-600' />
										<p className='text-slate-400'>
											" One disadvantage of Lorum Ipsum is that in Latin certain
											letters appear more frequently than others. "
										</p>
										<ul className='list-none mb-0 text-amber-400 mt-3'>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
										</ul>
									</div>
									<div className='text-center mt-5'>
										<img
											src='assets/images/client/03.jpg'
											className='h-14 w-14 rounded-full shadow-md mx-auto'
											alt=''
										/>
										<h6 className='mt-2 font-semibold'>Jemina CLone</h6>
										<span className='text-slate-400 text-sm'>Manager</span>
									</div>
								</div>
							</div>
							<div className='tiny-slide text-center'>
								<div className='customer-testi'>
									<div className='content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900'>
										<i className='mdi mdi-format-quote-open mdi-48px text-indigo-600' />
										<p className='text-slate-400'>
											" Thus, Lorem Ipsum has only limited suitability as a
											visual filler for German texts. "
										</p>
										<ul className='list-none mb-0 text-amber-400 mt-3'>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
										</ul>
									</div>
									<div className='text-center mt-5'>
										<img
											src='assets/images/client/04.jpg'
											className='h-14 w-14 rounded-full shadow-md mx-auto'
											alt=''
										/>
										<h6 className='mt-2 font-semibold'>Smith Vodka</h6>
										<span className='text-slate-400 text-sm'>Manager</span>
									</div>
								</div>
							</div>
							<div className='tiny-slide text-center'>
								<div className='customer-testi'>
									<div className='content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900'>
										<i className='mdi mdi-format-quote-open mdi-48px text-indigo-600' />
										<p className='text-slate-400'>
											" There is now an abundance of readable dummy texts. These
											are usually used when a text is required. "
										</p>
										<ul className='list-none mb-0 text-amber-400 mt-3'>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
										</ul>
									</div>
									<div className='text-center mt-5'>
										<img
											src='assets/images/client/05.jpg'
											className='h-14 w-14 rounded-full shadow-md mx-auto'
											alt=''
										/>
										<h6 className='mt-2 font-semibold'>Cristino Murfi</h6>
										<span className='text-slate-400 text-sm'>Manager</span>
									</div>
								</div>
							</div>
							<div className='tiny-slide text-center'>
								<div className='customer-testi'>
									<div className='content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900'>
										<i className='mdi mdi-format-quote-open mdi-48px text-indigo-600' />
										<p className='text-slate-400'>
											" According to most sources, Lorum Ipsum can be traced
											back to a text composed by Cicero. "
										</p>
										<ul className='list-none mb-0 text-amber-400 mt-3'>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
											<li className='inline'>
												<i className='mdi mdi-star' />
											</li>
										</ul>
									</div>
									<div className='text-center mt-5'>
										<img
											src='assets/images/client/06.jpg'
											className='h-14 w-14 rounded-full shadow-md mx-auto'
											alt=''
										/>
										<h6 className='mt-2 font-semibold'>Cristino Murfi</h6>
										<span className='text-slate-400 text-sm'>Manager</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*end grid*/}
				</div>
				{/*end container*/}
			</section>
			{/*end section*/}
			{/* End */}
			{/* Insta Post Start */}
			<div className='container-fluid relative'>
				<div className='grid grid-cols-1 relative'>
					<div className='tiny-twelve-item'>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/1.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/1.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/2.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/2.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/3.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/3.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/4.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/4.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/5.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/5.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/6.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/6.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/7.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/7.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/8.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/8.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/9.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/9.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/10.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/10.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/11.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/11.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/12.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/12.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/13.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/13.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/14.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/14.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
						<div className='tiny-slide'>
							<div className='card border-0 rounded-0'>
								<div className='card-body p-0'>
									<a
										href='assets/images/food/15.jpg'
										className='lightbox d-inline-block'
										title=''
									>
										<img
											src='assets/images/food/15.jpg'
											className=''
											alt='Insta Post'
										/>
										<div className='overlay bg-dark' />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-center hidden md:block'>
						<a
							href='https://www.instagram.com/shreethemes/'
							target='_blank'
							className='btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md'
						>
							Follow Now
						</a>
					</div>
				</div>
				{/*end grid*/}
			</div>
			{/*end container*/}
			{/* Insta Post End */}
			{/* Footer Start */}

			{/*end footer*/}
			{/* Footer End */}
			{/* Start Cookie Popup */}

			{/*Note: Cookies Js including in plugins.init.js (path like; assets/js/plugins.init.js) and Cookies css including in _helper.scss (path like; scss/_helper.scss)*/}
			{/* End Cookie Popup */}
			{/* Back to top */}

			{/* Back to top */}
			{/* Switcher */}

			{/* Switcher */}
			{/* JAVASCRIPTS */}
			{/* JAVASCRIPTS */}
		</>
	);
}
