<script>
    import dividerDesktop from '../assets/pattern-divider-desktop.svg';
    import dividerMobile from '../assets/pattern-divider-mobile.svg';
</script>

<div><img src={dividerMobile} srcset={`${dividerDesktop} 444w`} sizes="(min-width: 35em) 540px, 100vw" alt="divider"></div>

<style>
    div {
        max-width: 54rem;
        overflow: hidden;
        margin-bottom: 2rem;
    }
    div > img {
        display: block;
        width: 100%;
    }
</style>