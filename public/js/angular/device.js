/**
 * Created by alex on 29.04.15.
 */
(function () {
    var app = angular.module('device', []);

    app.controller("DeviceController", function () {
        var main = this;

        main.baseUrl = "https://sourceforge.net/projects/namelessrom/files";
        main.deviceColumns = ["Codename", "Device", "n-1.0 (4.4.x)", "n-2.0 (5.0.x)", "n-2.1 (5.1.x)"];
        main.vendors = [
            {
                "name": "LG",
                "devices": [
                    {
                        "codename": "p880",
                        "model": "LG Optimus 4X HD",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true"
                    }
                ]
            },
            {
                "name": "Nexus",
                "devices": [
                    {
                        "codename": "hammerhead",
                        "model": "Nexus 5",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true"
                    },
                    {
                        "codename": "mako",
                        "model": "Nexus 4",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true"
                    }
                ]
            },
            {
                "name": "OnePlus",
                "devices": [
                    {
                        "codename": "bacon",
                        "model": "OnePlus One",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true"
                    }
                ]
            },
            {
                "name": "OPPO",
                "devices": [
                    {
                        "codename": "find7",
                        "model": "OPPO Find 7",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true"
                    },
                    {
                        "codename": "n3",
                        "model": "OPPO N3",
                        "n_1_0": "false",
                        "n_2_0": "true",
                        "n_2_1": "true"
                    }
                ]
            },
            {
                "name": "Samsung",
                "devices": [
                    {
                        "codename": "i9300",
                        "model": "Samsung Galaxy S3",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true"
                    },
                    {
                        "codename": "i9305",
                        "model": "Samsung Galaxy S3 LTE",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "false"
                    },
                    {
                        "codename": "n7100",
                        "model": "Samsung Note 2",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true"
                    },
                    {
                        "codename": "t0lte",
                        "model": "Samsung Note 2 LTE",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "false"
                    }
                ]
            }
        ];
    });

})();
