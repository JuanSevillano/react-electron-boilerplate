import React from 'react'

import classes from './Current.module.css'

const Current = (props) => {
	return (
		<div className={classes.Current}>
			<section>
				{props.turn}
			</section>
			<section>

			</section>
		</div>
	)
}

export default Current
