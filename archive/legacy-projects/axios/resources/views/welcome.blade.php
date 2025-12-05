<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Axios</title>
    </head>
    <body>
        <div id="app">
            <ul>
                <li v-for="skill in skills">@{{skill}}</li>
            </ul>
        </div>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://unpkg.com/vue"></script>
        <script src="/js/app.js"" type="text/javascript" charset="utf-8" async defer></script>
    </body>
</html>
