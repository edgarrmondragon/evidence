<script>
    import EnvironmentVarListing from "./EnvironmentVarListing.svelte";
    import VariableCopy from "./VariableCopy.svelte";
    export let settings
</script>

{#if !settings.credentials}
<p>You'll need to connect to a database before deploying to netlify.</p>
{:else if !settings.gitRepo}
<p>You'll need to set up a git repo before deploying to netlify.</p>
{:else }

<h1>Deploying to Netlify</h1>

<ol>
    <li><a href='https://app.netlify.com/start' target=_blank>Start a new netlify project &rarr;</a></li>
    <li>Choose the repo containing this project</li>
    <li>Update the <code>site settings</code> to match those below</li>

</ol>

<div class="separator">Basic Build Settings</div>

<div class='setting-row'>
    <span class='setting'>Build command</span>
    <div class='setting-value'><VariableCopy text={'npm run build'}/></div>
</div>


<div class='setting-row'>
    <span class='setting'>Publish directory</span>  
    <div class='setting-value'><VariableCopy text={'build/'}/> </div>
    
</div>

<div class="separator">Advanced Build Settings</div>
<p>Click 'Show Advanced' and copy paste the following into <a href='https://docs.netlify.com/configure-builds/environment-variables/' >environment variables.</a> </p>

<EnvironmentVarListing {settings}/>

<div class="separator">Optional </div>
<ol>
    <li><a href='https://docs.netlify.com/visitor-access/password-protection/'>Password protect your site</a></li>
    <li> <a href='https://docs.evidence.dev/deployment/netlify#optional-schedule-updates-using-github-actions'>Schedule your site to update periodically</a></li>
</ol>

{/if}




<style>
    a {
        color: var(--blue-600);
        text-decoration: none;
    }

    a:hover {
        color: var(--blue-800);
        text-decoration: none;
    }

    span.setting {
        font-size: 0.85em;
        color: var(--grey-800);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    div.setting-row {
        margin-top: 1.25em;
    }

    div.setting-row:first-of-type {
        margin-top: 0em;
    }

    div.setting-value {
        margin-top: 0.25em;
        width: 45%;
    }

    .separator {
        display: flex;
        align-items: center;
        text-align: center;
        margin-block-start: 2.5em;
        color: var(--grey-700);
        font-weight:bold;
    }

    .separator::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid var(--grey-200);
    }

    .separator:not(:empty)::after {
        margin-left: 1.5em;
        margin-top: 0.1em;
    }

</style>