const Footer = () => {
	return (
		<footer className='footer bg-dark-footer relative text-gray-200 dark:text-gray-200'>
			<div className='container'>
				<div className='grid grid-cols-12'>
					<div className='col-span-12'>
						<div className='py-[60px] px-0'>
							<div className='grid lg:grid-cols-3 md:grid-cols-6 justify-center gap-[30px]'>
								<div className='text-center'>
									<h5 className='tracking-[1px] text-gray-100 font-semibold mb-4'>
										Open Hours
									</h5>
									<p className='mb-2'>Monday - Friday: 10 AM - 11 PM</p>
									<p className='mb-0'>Saturday - Sunday: 9 AM - 1 PM</p>
								</div>
								<div className='text-center'>
									<h5 className='tracking-[1px] text-gray-100 font-semibold mb-4'>
										Reservation
									</h5>
									<p className='mb-2'>
										<a href='tel:+152534-468-854' className='text-gray-200'>
											+152 534-468-854
										</a>
									</p>
									<p className='mb-0'>
										<a
											href='mailto:contact@example.com'
											className='text-gray-200'
										>
											contact@example.com
										</a>
									</p>
								</div>
								<div className='text-center'>
									<h5 className='tracking-[1px] text-gray-100 font-semibold mb-4'>
										Address
									</h5>
									<p className='mb-2'>Techwind Restaurent</p>
									<p className='mb-0'>
										C/54 Northwest Freeway, Suite 558, USA 485
									</p>
								</div>
							</div>
							{/*end grid*/}
							<div className='grid grid-cols-1 mt-12'>
								<div className='text-center'>
									<img
										src='assets/images/logo-icon-80.png'
										className='block mx-auto'
										alt=''
									/>
									<p className='max-w-xl mx-auto mt-6'>
										Splash your dream color Bring your home to lively Colors. We
										make it a priority to offer flexible services to accomodate
										your needs
									</p>
								</div>
								<ul className='list-none text-center mt-6'>
									<li className='inline'>
										<a
											href='https://1.envato.market/techwind'
											target='_blank'
											className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
										>
											<i
												className='uil uil-shopping-cart align-middle'
												title='Buy Now'
											/>
										</a>
									</li>
									<li className='inline'>
										<a
											href='https://dribbble.com/shreethemes'
											target='_blank'
											className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
										>
											<i
												className='uil uil-dribbble align-middle'
												title='dribbble'
											/>
										</a>
									</li>
									<li className='inline'>
										<a
											href='https://www.behance.net/shreethemes'
											target='_blank'
											className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
										>
											<i className='uil uil-behance' title='Behance' />
										</a>
									</li>
									<li className='inline'>
										<a
											href='http://linkedin.com/company/shreethemes'
											target='_blank'
											className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
										>
											<i className='uil uil-linkedin' title='Linkedin' />
										</a>
									</li>
									<li className='inline'>
										<a
											href='https://www.facebook.com/shreethemes'
											target='_blank'
											className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
										>
											<i
												className='uil uil-facebook-f align-middle'
												title='facebook'
											/>
										</a>
									</li>
									<li className='inline'>
										<a
											href='https://www.instagram.com/shreethemes/'
											target='_blank'
											className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
										>
											<i
												className='uil uil-instagram align-middle'
												title='instagram'
											/>
										</a>
									</li>
									<li className='inline'>
										<a
											href='https://twitter.com/shreethemes'
											target='_blank'
											className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
										>
											<i
												className='uil uil-twitter align-middle'
												title='twitter'
											/>
										</a>
									</li>
									<li className='inline'>
										<a
											href='mailto:support@shreethemes.in'
											className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
										>
											<i
												className='uil uil-envelope align-middle'
												title='email'
											/>
										</a>
									</li>
									<li className='inline'>
										<a
											href='https://forms.gle/QkTueCikDGqJnbky9'
											target='_blank'
											className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
										>
											<i
												className='uil uil-file align-middle'
												title='customization'
											/>
										</a>
									</li>
								</ul>
								{/*end icon*/}
							</div>
							{/*end grid*/}
						</div>
					</div>
				</div>
				{/*end grid*/}
			</div>
			{/*end container*/}
			<div className='py-[30px] px-0 border-t border-slate-800'>
				<div className='container text-center'>
					<div className='grid md:grid-cols-1'>
						<p className='mb-0'>
							© Techwind. Design with{' '}
							<i className='mdi mdi-heart text-red-600' /> by{' '}
							<a
								href='https://shreethemes.in/'
								target='_blank'
								className='text-reset'
							>
								Shreethemes
							</a>
							.
						</p>
					</div>
					{/*end grid*/}
				</div>
				{/*end container*/}
			</div>
		</footer>
	);
};

export default Footer;
