import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchFilmById } from '../reducers/actions';
import { getSearchParamsFromURL, Head } from '../commponents/helpers';

export default () => {
	const { singleSearchResult } = useSelector((state) => state.tvmaze);
	const dispatch = useDispatch();
	const fakeImage = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg';
	const currentId = getSearchParamsFromURL('id').toString();

	if (!singleSearchResult || singleSearchResult.id.toString() !== currentId) {
		dispatch(searchFilmById(currentId));
	} else {
		const {
			image, name, genres, summary, officialSite, language,
		} = singleSearchResult;

		return (
			<>
				{Head('Single')}

				<div className='row'>
					<div className='col col-sm-6'>
						<img src={image ? image.original : fakeImage} className='card-img-top mb-2' alt={name} />
					</div>
					<div className='col'>
						<h2>{name}</h2>
						<p>{language}</p>
						<p>{`Ganres: ${genres.join(', ')}`}</p>
						<div dangerouslySetInnerHTML={{ __html: summary }} />
						{officialSite && (
							<p>
								{'Official site: '}
								<a href={officialSite} target='_blank' rel='noreferrer'>{officialSite}</a>
							</p>
						)}
					</div>
				</div>
			</>
		);
	}

	return null;
};
