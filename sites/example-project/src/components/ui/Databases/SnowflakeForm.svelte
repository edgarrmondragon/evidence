<script>
    export let credentials
    export let existingCredentials
    export let disableSave;

    credentials = {...existingCredentials}

    let opts = [
        {
            id: "account", 
            label: "Account", 
            type: "text", 
            optional: false,
            override: false,
            placeholder: "xx16244.us-central1.gcp",
            value: credentials.account},
        {
            id: "username", 
            label: "Username", 
            type: "text", 
            optional: false,
            override: false,
            placeholder: "weyland-yutani",
            value: credentials.username},
        {
            id: "password", 
            label: "Password", 
            type: "password", 
            optional: false,
            override: false,
            value: credentials.password
        }
    ]

    import GenericForm from './GenericForm.svelte'

</script>

<GenericForm {opts} bind:credentials bind:disableSave/>
