function UserProfile(props) {
	return(
		<>
			<div style={{backgroundColor: 'lavenderblush', color: 'black', height: '175px', width: '150px', border: '2px solid purple', padding: '10px', margin: '0 auto'}}>
				<h2 style={{color: 'purple', fontSize: '25px'}}>{props.name}</h2>
				<p style={{textAlign: 'left', padding: '0.5px', fontWeight: 'bold'}}>Age: <span style={{fontWeight: 'normal'}}>{props.age} </span></p>
				<p style={{textAlign: 'left', padding: '0.5px', fontWeight: 'bold'}}>Bio: <span style={{fontWeight: 'normal'}}>{props.bio} </span></p>
			</div>
		</>
	);
}

export default UserProfile;