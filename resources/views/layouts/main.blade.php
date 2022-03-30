<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/index.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/show.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/edit.css') }}" />
    <title>Document</title>
</head>

<body>
    <div class="wrapper">
        <div class="sidebar">
            <div class="logo-rect">
                <div class="logo">
                    <svg width="53" height="23" viewBox="0 0 53 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.39 22.8009L24.7961 9.58182C24.9198 9.21567 25.1601 8.92138 25.5257 8.70237C25.9639 8.4577 26.4956 8.32596 27.121 8.30885L30.633 8.30542L30.4687 9.19172L27.9919 22.8027H22.39V22.8009Z" fill="url(#paint0_linear_3_209)" />
                        <path d="M39.406 8.2915L36.7631 22.8007H31.2301L33.8694 8.2915H39.406Z" fill="url(#paint1_linear_3_209)" />
                        <path
                            d="M3.12158 5.17404H8.66166V5.17062C8.66166 5.17062 11.9952 5.15522 13.2707 5.15522C15.88 5.15522 17.4187 6.85937 17.0707 9.4481C16.758 11.7699 14.6346 13.1473 12.3592 13.1644C8.40197 13.1952 7.86315 18.3247 12.0023 18.3247C13.9897 18.3247 16.4542 18.1382 18.8373 16.328C21.4961 14.309 22.1497 12.1994 22.6426 9.47205C22.9482 7.7833 22.5631 4.64363 20.9237 2.79063C19.2843 0.939334 17.0672 0.0136882 14.2706 0.0136882C11.4741 0.0136882 4.09145 0 4.09145 0C4.09145 0 3.61093 2.57846 3.12158 5.17404Z"
                            fill="url(#paint2_linear_3_209)" />
                        <path
                            d="M0 22.7785L2.16233 10.9059C2.16233 10.9059 5.67081 10.9179 6.11423 10.9093C8.16349 10.9093 9.01853 8.28467 10.7816 8.28467C11.0448 8.28467 13.2372 8.27954 13.2372 8.27954C14.283 8.27954 14.6911 9.2069 14.631 9.62438C14.518 10.3943 14.0445 10.8358 13.0252 10.8358L13.0234 10.8426C13.0234 10.8426 12.345 10.8477 11.9652 10.8426C10.0114 10.8204 7.65294 11.6502 7.11943 14.126C6.48345 17.6198 5.53831 22.7785 5.53831 22.7785H0V22.7785Z"
                            fill="url(#paint3_linear_3_209)" />
                        <path
                            d="M3.48544 8.36497H1.98029C1.86193 8.36497 1.75063 8.45565 1.72943 8.57029C1.71 8.68321 1.78773 8.7756 1.90433 8.7756H3.40771C3.52431 8.7756 3.63737 8.68321 3.6568 8.57029C3.67977 8.45565 3.60204 8.36497 3.48544 8.36497ZM3.67624 7.31099H2.17109C2.05449 7.31099 1.9432 7.40339 1.922 7.51631C1.9008 7.62924 1.98029 7.72163 2.09689 7.72163H3.60204C3.7204 7.72163 3.8317 7.62924 3.8529 7.51631C3.87233 7.40339 3.7946 7.31099 3.67624 7.31099ZM3.29288 9.41722H1.78773C1.66937 9.41722 1.55807 9.50962 1.53687 9.62426C1.51568 9.73718 1.59517 9.83129 1.71 9.83129H3.21515C3.33351 9.83129 3.44481 9.73889 3.46601 9.62426C3.48897 9.50962 3.41124 9.41722 3.29288 9.41722ZM3.8688 6.25189H2.36541C2.24705 6.25189 2.13576 6.34429 2.11456 6.45721C2.09512 6.57185 2.17286 6.66424 2.28945 6.66424H3.7946C3.91119 6.66424 4.02426 6.57185 4.04369 6.45721C4.06489 6.34429 3.98716 6.25189 3.8688 6.25189ZM26.3489 1.29002C26.0556 2.83504 25.4585 6.05171 25.4585 6.05171C25.7659 5.7232 26.0697 5.59658 26.3224 5.51617C26.6368 5.41693 27.0361 5.38613 27.6615 5.36902L31.1752 5.36388L32.1663 0.0615234H28.9281C27.37 0.0632344 26.5591 0.603909 26.3489 1.29002ZM49.2777 2.26015C47.6347 0.793829 45.5642 0.0632361 43.0645 0.0632361H35.3674L34.4028 5.36046H39.95L42.0893 5.41522C43.1051 5.44773 43.9655 5.68555 44.6721 6.13212C45.8169 6.89694 46.2303 8.15623 45.9105 9.90657L44.2852 18.8397C43.7093 21.7158 47.4421 22.8485 49.0904 22.8485C49.2653 21.9331 51.2651 10.9024 51.2651 10.9024H51.2563L51.4382 9.90657C52.0353 6.6266 51.3145 4.07551 49.2777 2.26015Z"
                            fill="url(#paint4_linear_3_209)" />
                        <path
                            d="M51.9224 0.0720215C52.1026 0.0720215 52.2792 0.116509 52.4523 0.207191C52.6255 0.297874 52.7597 0.426198 52.8551 0.593875C52.9523 0.761552 53 0.936073 53 1.11744C53 1.29709 52.9523 1.4699 52.8587 1.63587C52.7633 1.80184 52.6308 1.93016 52.4612 2.02255C52.2898 2.11495 52.1114 2.15943 51.9241 2.15943C51.7369 2.15943 51.5584 2.11324 51.3871 2.02255C51.2157 1.93016 51.0832 1.80184 50.9878 1.63587C50.8924 1.4699 50.8447 1.29709 50.8447 1.11744C50.8447 0.936073 50.8924 0.761552 50.9896 0.593875C51.0868 0.426198 51.221 0.297874 51.3924 0.207191C51.5637 0.11822 51.7404 0.0720215 51.9224 0.0720215ZM51.9224 0.244833C51.7704 0.244833 51.6238 0.282476 51.4807 0.35776C51.3376 0.433043 51.2245 0.540834 51.1451 0.679424C51.0638 0.819726 51.0232 0.965161 51.0232 1.11573C51.0232 1.2663 51.062 1.41002 51.1433 1.54861C51.2228 1.6872 51.3341 1.79328 51.4772 1.87028C51.6203 1.94727 51.7687 1.98662 51.9241 1.98662C52.0796 1.98662 52.228 1.94898 52.3711 1.87028C52.5142 1.79328 52.6255 1.68549 52.7032 1.54861C52.7827 1.41002 52.8216 1.2663 52.8216 1.11573C52.8216 0.965161 52.7809 0.819726 52.7014 0.679424C52.6219 0.539123 52.5089 0.433043 52.3658 0.35776C52.2192 0.282476 52.0725 0.244833 51.9224 0.244833ZM51.4489 1.69404V0.571634H51.8464C51.9824 0.571634 52.0814 0.581898 52.1414 0.60243C52.2015 0.622962 52.2509 0.658894 52.288 0.710224C52.3234 0.761553 52.3428 0.816304 52.3428 0.874478C52.3428 0.956605 52.3128 1.02847 52.2527 1.08835C52.1926 1.14995 52.1114 1.18417 52.0125 1.19101C52.0531 1.20812 52.0867 1.22694 52.1114 1.2509C52.1573 1.29538 52.2156 1.36895 52.2827 1.47332L52.4241 1.69404H52.1962L52.0937 1.51781C52.0125 1.37922 51.9471 1.29196 51.8976 1.25603C51.8641 1.23037 51.8128 1.21668 51.7475 1.21668H51.6379V1.69404H51.4489ZM51.6362 1.06098H51.8641C51.9718 1.06098 52.046 1.04558 52.0867 1.01478C52.1255 0.983982 52.1467 0.941206 52.1467 0.889876C52.1467 0.857367 52.1379 0.826571 52.1184 0.800906C52.099 0.775241 52.0725 0.75471 52.039 0.742733C52.0054 0.730756 51.9418 0.723912 51.8517 0.723912H51.6397V1.06098H51.6362Z"
                            fill="black" />
                        <defs>
                            <linearGradient id="paint0_linear_3_209" x1="0.537838" y1="27.0934" x2="32.5802" y2="12.3076" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#414042" />
                                <stop offset="0.0135" stop-color="#3E3D3F" />
                                <stop offset="0.1808" stop-color="#262528" />
                                <stop offset="0.3491" stop-color="#141417" />
                                <stop offset="0.516" stop-color="#08080A" />
                                <stop offset="0.681" stop-color="#020203" />
                                <stop offset="0.8433" />
                                <stop offset="1" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_3_209" x1="1.8865" y1="30.0164" x2="33.929" y2="15.2306" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#414042" />
                                <stop offset="0.0135" stop-color="#3E3D3F" />
                                <stop offset="0.1808" stop-color="#262528" />
                                <stop offset="0.3491" stop-color="#141417" />
                                <stop offset="0.516" stop-color="#08080A" />
                                <stop offset="0.681" stop-color="#020203" />
                                <stop offset="0.8433" />
                                <stop offset="1" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_3_209" x1="-4.86579" y1="15.3831" x2="27.1766" y2="0.597271" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#414042" />
                                <stop offset="0.0135" stop-color="#3E3D3F" />
                                <stop offset="0.1808" stop-color="#262528" />
                                <stop offset="0.3491" stop-color="#141417" />
                                <stop offset="0.516" stop-color="#08080A" />
                                <stop offset="0.681" stop-color="#020203" />
                                <stop offset="0.8433" />
                                <stop offset="1" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_3_209" x1="-2.85356" y1="19.7437" x2="29.1887" y2="4.95797" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#414042" />
                                <stop offset="0.0135" stop-color="#3E3D3F" />
                                <stop offset="0.1808" stop-color="#262528" />
                                <stop offset="0.3491" stop-color="#141417" />
                                <stop offset="0.516" stop-color="#08080A" />
                                <stop offset="0.681" stop-color="#020203" />
                                <stop offset="0.8433" />
                                <stop offset="1" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_3_209" x1="51.8745" y1="11.4557" x2="18.6328" y2="11.4557" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ED1C24" />
                                <stop offset="1" stop-color="#BE1E2D" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="erp">
                Enterprise Resource Planning
            </div>
            <div class="products">
                Продукты
            </div>
        </div>
        <div class="products">
            ПРОДУКТЫ
        </div>
        <div class="red_hr"></div>
        <div class="fio">
            Иванов Иван Иванович
        </div>
        <div class="content">
            <div class="head head_1">
                АРТИКУЛ
            </div>
            <div class="head head_2">
                НАЗВАНИЕ
            </div>
            <div class="head head_3">
                СТАТУС
            </div>
            <div class="head head_4">
                АТРИБУТЫ
            </div>
            <div class="products">
                @foreach ($products as $product)
                    <div class="product">
                        <div class="articule" data-id="{{ $product->ID }}">{{ $product->ARTICLE }}</div>
                        <div class="name" data-id="{{ $product->ID }}">{{ $product->NAME }}</div>
                        <div class="status" data-id="{{ $product->ID }}">{{ $product->STATUS }}</div>
                        <div class="attribute" data-id="{{ $product->ID }}">
                            @foreach (json_decode($product->DATA) as $key => $value)
                                {{ $key }}:{{ $value }} <br>
                            @endforeach
                        </div>
                    </div>
                @endforeach
            </div>
            <div type="button" class="add-button">Добавить</div>
            @include('includes/add')
            @include('includes/show')
            @include('includes/edit')
        </div>
    </div>
    @error('name')
        <script>
            alert("{{ $message }}");
        </script>
    @enderror
    @error('article')
        <script>
            alert("{{ $message }}");
        </script>
    @enderror
    <script src="{{ asset('js/index.js') }}"></script>
    <script src="https://kit.fontawesome.com/aa53675e71.js" crossorigin="anonymous"></script>
</body>

</html>
