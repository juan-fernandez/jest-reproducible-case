import MUIButton from '@mui/material/Button';
import { Accordion } from '@mui/material';
import { Card } from '@mui/material';
import { Dialog } from '@mui/material';
import { Grid } from '@mui/material';




const array = Array.from({ length: 1000 })

export const Button = () => {
    return (
        <Grid>
            <Dialog open>
                <Accordion>
                    <Card>
                        <div data-testid="my-button">button</div>
                        {array.map((el, index) => <MUIButton key={index}>hey</MUIButton>)}
                    </Card>
                </Accordion>
            </Dialog>
        </Grid>
    )
}