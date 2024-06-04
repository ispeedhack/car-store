import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SearchBox from "./SearchBox";

function Introduction() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 8 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            component="h1"
            variant="h1"
            fontWeight={400}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            نمایشگاه
            <Typography fontWeight={400} component="span" variant="h1" color={"primary"}>
              ماشین
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            نمایشگاه ماشین دارای بیش از 25 سال سابقه در زمینه خرید و فروش
            خودروهای لوکس و لاکچری، خارجی و ایرانی فعالیت دارد. <br />
            کارشناسان ما بهترین خودروی مورد نیاز شما را بر مبنای کیفیت و سلیقه
            مورد نظر معرفی می نمایند.
          </Typography>
          <SearchBox />
        </Stack>
      </Container>
    </Box>
  );
}

export default Introduction;
