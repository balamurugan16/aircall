import { Box, styled } from "@mui/material";
import { useGetActivitiesQuery } from "../lib/api";
import { Call } from "../components";

function ArchievedCalls() {
	const { data } = useGetActivitiesQuery();
	return (
		<Wrapper>
			{data
				?.filter(({ is_archived }) => is_archived)
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

export default ArchievedCalls;
