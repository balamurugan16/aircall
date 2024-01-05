import { Box, styled } from "@mui/material";
import { Call } from "../components";
import { useGetActivitiesQuery } from "../lib/api";

function AllCalls() {
	const { data } = useGetActivitiesQuery();
	return (
		<Wrapper>
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
