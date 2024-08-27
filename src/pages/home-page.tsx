import { Box, Typography } from "@mui/material";

const HomePage = (): JSX.Element => {
  return (
    <Box gap={3} display="grid">
      <Box width={600}>
        <Typography variant="h3">Lorem ipsum,</Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          consequatur similique atque repellat eum quia ipsum vel!
        </Typography>
      </Box>
      <Box>
        <img
          style={{ borderRadius: 16 }}
          width="100%"
          src="https://cdn.pixabay.com/photo/2023/08/20/06/45/hornbill-8201730_1280.png"
          alt="Gif of a dog"
        />
      </Box>
    </Box>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
