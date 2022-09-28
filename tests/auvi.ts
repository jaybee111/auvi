import Auvi from '../src/main.js';

document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('auvi-input-tooltip');
    const options = {
        mode: 'tooltip',
        options: [
            {
                label: 'Test 1',
                value: 'Test 1'
            },
            {
                label: 'Test 2',
                value: 'Test 2'
            },
            {
                label: 'Test 3',
                value: 'Test 3'
            }
        ],
    };
    const auviInstance = new Auvi(el, options).init();
    auviInstance.on('resultItemClicked', function (e: any) {
        console.log(e);
    });

    const elExternal = document.getElementById('auvi-input-external');
    const optionsExternal = {
        mode: 'external',
        resultListTarget: document.querySelector('.auvi-result-list-external'),
        options: [
            {
                label: 'Test 1',
                value: 'Test 1'
            },
            {
                label: 'Test 2',
                value: 'Test 2'
            },
            {
                label: 'Test 3',
                value: 'Test 3'
            }
        ],
    };
    const auviInstanceExternal = new Auvi(elExternal, optionsExternal).init();
    auviInstanceExternal.on('resultItemClicked', function (e: any) {
        console.log(e);
    });

    const elTooltipAsync = document.getElementById('auvi-input-tooltip-async');
    const optionsTooltipAsync = {
        mode: 'tooltip',
        options: "http://localhost:3004/users?q={term}"
    };
    const auviInstanceTooltipAsync = new Auvi(elTooltipAsync, optionsTooltipAsync).init();
    auviInstanceTooltipAsync.on('resultItemClicked', function (e: any) {
        console.log(e);
    });

    const elTooltipAsyncTemplate = document.getElementById('auvi-input-tooltip-async-template');
    const optionsTooltipAsyncTemplate = {
        mode: 'tooltip',
        options: "http://localhost:3004/users?q={term}",
        resultItemTemplate: function (item) {
            return `<strong>${item.value}</strong>`
        },
    };
    const auviInstanceTooltipAsyncTemplate = new Auvi(elTooltipAsyncTemplate, optionsTooltipAsyncTemplate).init();
    auviInstanceTooltipAsyncTemplate.on('resultItemClicked', function (e: any) {
        console.log(e);
    });

    const elExternalAsync = document.getElementById('auvi-input-external-async');
    const optionsExternalAsync = {
        mode: 'external',
        resultListTarget: document.querySelector('.auvi-result-list-external-async'),
        options: "http://localhost:3004/users?q={term}"
    };
    const auviInstanceExternalAsync = new Auvi(elExternalAsync, optionsExternalAsync).init();
    auviInstanceExternalAsync.on('resultItemClicked', function (e: any) {
        console.log(e);
    });
});
