import React from 'react';
import {Field} from 'formik';
import { ViewProps } from './types';
import './Tests.scss';
import { BTN_BG, INP_BG} from '../../classes';

const View: React.FC<ViewProps> = ({
  test, 
  count = 0, 
  start, 
  toggleOptions, 
  options, 
  randomWords,
	startTest,
	sendAnswer,
	setFieldValue,
	values,
}) => {
	const word = start? options.type === "en-ua"? test.words[randomWords[count]].en : test.words[randomWords[count]].ua : "";

	const handleKeyDown = (event: any) => {
		if(count === options.words - 1) {
			return
		}
    if (event.key === 'Enter') {
			event.preventDefault();
      sendAnswer(setFieldValue, values);
    }
  };

	return (
		<>   
			<div className="header">
				<button 
					type="button" 
					className={BTN_BG}
					onClick={toggleOptions} 
					disabled={start}
				>
					OPTIONS
				</button> 
			</div>

			<div className="content">
				{
					start && (
						<div className="content__info">
							<div className="content__info-inner">
								<h1 className="title">test name: {test?.name}</h1>
								<h4 className="under-title">type: EN _ UA</h4>
								<h5 className="under-title">{count}</h5>
							</div>

							<h2 className="title title_bottom_border">{ word }</h2>
						</div>
					)
				}
			</div>

			<div className="bottom-panel">
				{
					start && (
						<Field className={INP_BG}
							name="answer" 
							type="text" 
							placeholder="YOUR ANSWER" 
							onKeyDown={handleKeyDown}
						/>
					)
				}
				{
					count === options.words - 1 && (
						<button 
							type="submit" 
							className={BTN_BG}
							onKeyDown={handleKeyDown}
						>
							END THE TEST
						</button>
					)
				} 
				{ 
					start && count !== options.words && (
					<button 
						type="button" 
						className={BTN_BG}
						onClick={() => sendAnswer(setFieldValue, values)}
					>
						SEND ANSWER
					</button>
					)
				}
				{
					!start && (
						<button 
							type="button"
							className={BTN_BG}
							onClick={() => startTest()}>
							START
						</button>
					)
				}
			</div>
		</>
	)
};

export default View;
