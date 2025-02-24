import { Box, Container, Stack, styled, Typography } from "@mui/material"
import { vr360SiteUrl } from '../constants'
import { headerItems } from "./Header"

export const DesktopHeader = () => {
    return (
        <Box>
            <Container>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <ATagStyled href={'/'}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={'/images/logo.png'} style={{ width: '100px', marginRight: 8 }} />
                            <LogoText>SÁNG KIẾN THUYẾT TRÌNH DI ĐỘNG</LogoText>
                        </Box>
                    </ATagStyled>
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                        {headerItems.map((item) => <HeaderItem title={item.title} link={item.link} />)}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

const HeaderItem = (props) => {
    return (
        <ATagStyled href={props.link}>
            <Typography sx={{
                color: 'black', 
                '&:hover': {
                    color: 'blue'
                }
            }}>{props.title}</Typography>
        </ATagStyled>
    )
}

const LogoText = styled(Typography)({
    fontSize: 20,
    textTransform: 'uppercase',
})

const ATagStyled = styled('a')({
    textDecoration: 'none',
    color: 'inherit'
})