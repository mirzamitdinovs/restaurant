const Reservation = () => {
	return (
		<section
			className='relative md:py-24 py-16  bg-no-repeat bg-fixed bg-top'
			id='table'
			style={{
				backgroundImage: 'url(assets/images/cta.jpg)',
			}}
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
									We make it a priority to offer flexible services to accomodate
									your needs
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
	);
};

export default Reservation;
