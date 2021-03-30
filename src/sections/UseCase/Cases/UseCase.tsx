import CSS from 'csstype';

const GreenButton: CSS.Properties = {
	width: '441px',
	height: '64px',
	background: ' #07DCA9',
	color: '#fff',
	borderRadius: '8px',
	fontSize: '20px',
	lineHeight: '32px',
};

const ColorGreen: CSS.Properties = {
	backgroundColor: ' #07DCA9',
};

export default function UseCase() {
	return (
		<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
			<div className='flex flex-wrap -m-4'>
				<div className=''>
					<h1 className='font-bold title-font text-gray-900 mb-4 text-4xl text-center sm:text-left'>
						UX Research / Qualitative research
					</h1>
					<ul className='list-none list-inside flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
						<li className='mb-4 inline-flex items-center justify-center text-black text-base'>
							<span style={ColorGreen} className='w-4 h-4 mr-3 '></span>
							<p>
								Gain time: directly mark moments of interest
								<span className='italic'>
									<br />
									(80% of the information in a video-conference does NOT matter)
								</span>
							</p>
						</li>
						<li className='mb-4  inline-flex items-center justify-center text-black text-base'>
							<span style={ColorGreen} className='w-4 h-4 mr-3 '></span>
							Perfect transcription
						</li>
						<li className='mb-4 inline-flex items-center justify-center text-black text-base'>
							<span style={ColorGreen} className='w-4 h-4 mr-3'></span>
							Never forget anything
						</li>
					</ul>
					<button
						style={GreenButton}
						className='inline-flex items-center justify-center mt-16'
					>
						Summarize your UX & Qualitative Research
						<span>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								className='ml-4'
							>
								<path
									d='M5.99719 11.3L5.13719 10.38L9.15719 6.64H0.397188V5.28H9.15719L5.13719 1.54L5.99719 0.619999L11.4372 5.92V6L5.99719 11.3Z'
									fill='white'
								/>
							</svg>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
