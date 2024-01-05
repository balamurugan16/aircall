import { Box, Typography, styled } from "@mui/material";
import { Call } from "../components";
import useActivies from "../hooks/useActivities";

function AllCalls() {
	const data = useActivies("Unarchived");

	return (
		<Wrapper>
			{Object.entries(data).map(([date, calls]) => {
				return (
					<div className="call-group">
						<Typography className="day" variant="body2">
							{date}
						</Typography>
						{calls.map((call) => (
							<Call {...call} type="Unarchived" />
						))}
					</div>
				);
			})}
		</Wrapper>
	);
}

const Wrapper = styled(Box)`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	max-width: 40rem;
	margin: 0 auto;

	.call-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export default AllCalls;
