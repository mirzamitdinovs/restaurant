const MenuTitle = () => {
	return (
		<section
			style={{
				backgroundImage: 'url(/assets/images/menu.jpg)',
			}}
			className='relative py-36 bg-no-repeat bg-fixed bg-top'
		>
			<div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black' />
			<div className='absolute bottom-0 right-0 left-0 text-center px-3'>
				<h5 className='text-slate-400 text-xl leading-normal font-semibold'>
					Our Menu
				</h5>
				<h4 className='md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mb-5'>
					Choose your mixture &amp; order now!
				</h4>
			</div>
		</section>
	);
};

export default MenuTitle;
