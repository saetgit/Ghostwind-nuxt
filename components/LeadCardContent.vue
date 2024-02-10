<template>
    <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <p class="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>
            <div class="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow Tailwind CSS
                and Ghost fan</div>
            <p class="text-gray-800 font-serif text-base px-6 mb-5">
                This starter template is an attempt to replicate the default Ghost theme "Casper"
                using Tailwind CSS and vanilla Javascript.
            </p>
        </div>

        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
                <AvatorLittle src="guy.jpeg"/>
                <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
        </div>
    </div>
</template>