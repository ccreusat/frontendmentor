<script>
    let id = 1;
    let advice = "Click on the dice to generate a random advice!";
</script>

<span>
    Advice #{id}
    <h2>{advice}</h2>
    <p>(Advice is cached for 2 seconds. You have to wait to generate another advice)</p>
</span>

<style>
    span {
        font-size: 1.3rem;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: var(--neon-green);
    }
    h2 {
        --h1-font-size: 2.4rem;
        --h1-margin-bottom: 2.4rem;
        margin-top: 2.4rem;
        margin-bottom: var(--h1-margin-bottom);
        font-size: var(--h1-font-size);
        color: var(--light-cyan);
        letter-spacing: -0.3px;
    }
    p {
        margin-bottom: 2rem;
        /* text-align: center; */
        font-size: 1.1rem;
        color: var(--light-cyan);
        letter-spacing: -0.3px;
    }
</style>