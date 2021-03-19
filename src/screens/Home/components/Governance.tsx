import React from 'react';
import { Grid, makeStyles, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        paddingTop: 125,
        paddingBottom: 67,
        borderBottom: '3px solid rgba(0, 0, 0, 0.05)'
	},
	subMain: {
        maxWidth: 1120,
        position: 'relative'
    },
    title: {
        fontSize: 30,
        lineHeight: '55px',
        color: theme.palette.secondary.main,
        textAlign: 'center',
    },
    description: {
        fontFamily: 'POperator',
        fontWeight: 700,
        fontSize: 25,
        lineHeight: '23px',
        textAlign: 'center',
        color: '#000000',
        opacity: 0.7,
        marginTop: 39,
        paddingBottom: 16,
        maxWidth: 820,
        letterSpacing: 1,
    },
    sdescription: {
        fontFamily: 'POperator',
        fontSize: 25,
        lineHeight: '23px',
        opacity: 0.7,
        marginTop: 39
    },
    tickItem: {
        marginTop: 15,
        '&:hover': {
            '& img': {
                display: 'inherit'
            }
        }
    },
    circle: {
        width: 40,
        height: 40,
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.3,
        borderRadius: 20,
    },
    tickText: {
        fontFamily: 'DMono',
        fontSize: 20,
        lineHeight: '24px',
        color: theme.palette.secondary.main,
        marginLeft: 22,
    },
    tickItems: {
        width: 360
    },
    arrowContainer: {
        width: 36,
    },
    arrow: {
        width: 20,
        marginRight: 16,
        display: 'none'
    },
    tickItemImage: {
        width: 40
    }
}))

type TickItemProps = {
    children: string,
    href: string,
    type: string,
}

const TickItem = ({ children, href, type }: TickItemProps) => {
    const styles = useStyles();

    return (
        <Grid container justify="center" alignItems="center" className={styles.tickItem}>
            <Grid className={styles.arrowContainer}>
                <img draggable={false} src="/assets/images/arrow2.png" className={styles.arrow} />
            </Grid>
            <img draggable={false} src={`/assets/images/${type}.png`} className={styles.tickItemImage} />
            <Link href={href} className={styles.tickText}>
                {children}
            </Link>
        </Grid>
    )
}

export default function Governance() {
    const styles = useStyles();

    return (
        <Grid className={styles.main} container justify="center" id="governance">
            <Grid className={styles.subMain} alignItems="center" container direction="column">
                <Typography className={styles.title}>Governance</Typography>
                <Typography className={styles.description}>
                Badger DAO is governed through a combination of communication platforms, from Discord, to our community forum
                </Typography>
                <Grid container alignItems="flex-start" direction="column" className={styles.tickItems}>
                    <Grid item>
                        <TickItem type="discord" href="https://discord.com/invite/xSPFHHS">
                            Go to Discord
                        </TickItem>
                    </Grid>
                    <Grid item>
                        <TickItem type="community" href="https://forum.badger.finance">
                            Go to Community forum
                        </TickItem>
                    </Grid>
                </Grid>
                <Typography className={styles.sdescription}>
                    Anyone can come and propose a new product, idea, or amendment to governance
                </Typography>
            </Grid>
        </Grid>
    )
}