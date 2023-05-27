import React from 'react';
import { useState } from 'react';

function UserDashBoard() {
	const [moneyEarn, setMoneyEarn] = useState(0);
	const [expenditure, setExpenditure] = useState(0);

	const totalMoney = moneyEarn - expenditure;
	const progress = Math.round((totalMoney / moneyEarn) * 100);
	return (
		<div>
			<h1>Money Tracker</h1>
			<div>
				<label htmlFor="moneyEarn">Money Earned:</label>
				<input
					type="number"
					id="moneyEarn"
					value={moneyEarn}
					onChange={(event) => setMoneyEarn(Number(event.target.value))}
				/>
			</div>
			<div>
				<label htmlFor="expenditure">Expenditure:</label>
				<input
					type="number"
					id="expenditure"
					value={expenditure}
					onChange={(event) => setExpenditure(Number(event.target.value))}
				/>
			</div>
			<div>
				<progress max="100" value={progress}></progress>
				<p>{`${progress}%`}</p>
			</div>
		</div>
	);
}

export default UserDashBoard;
