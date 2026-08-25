import Head from "next/head";

const Error = ({}) => { 
	return (
		<>
			<Head>
				<title>Σελίδα Σφάλματος | Disegno</title>
				<meta name="description" content="Παρουσιάστηκε σφάλμα κατά τη φόρτωση της σελίδας." />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div style={{padding: "15px"}}>
				<span>An error occurred.</span>
			</div>
		</>
	)
};

export default Error;