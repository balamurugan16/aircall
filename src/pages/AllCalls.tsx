import { Box, Button, styled } from "@mui/material";
import { Call } from "../components";
import { useArchieveAllCallsMutation, useGetActivitiesQuery } from "../lib/api";

function AllCalls() {
	const { data } = useGetActivitiesQuery();
	const [archiveAllCalls, _] = useArchieveAllCallsMutation();

	return (
		<Wrapper>
			<Button
				onClick={() => {
					archiveAllCalls();
				}}
			>
				Archive all calls
			</Button>
			{data
				?.filter(({ is_archived }) => !is_archived)
				?.map((call) => (
					<Call key={call.id} {...call} />
				))}
		</Wrapper>
	);
}

const Wrapper = styled(Box)`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export default AllCalls;
