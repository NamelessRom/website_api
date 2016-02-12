/**
 * Created by alex on 29.04.15.
 */
(function () {
    var app = angular.module('device', []);

    app.controller("DeviceController", function () {
        var main = this;

        main.baseUrl = "https://sourceforge.net/projects/namelessrom/files";
        main.deviceColumns = ["Codename", "Device", "n-1.0 (4.4.x)", "n-2.0 (5.0.x)", "n-2.1 (5.1.x)", "n-3.0 (6.x)"];
        main.vendors = [
            {
                "name": "LG",
                "devices": [
                    {
                        "codename": "p880",
                        "model": "LG Optimus 4X HD",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true",
                        "n_3_0": "false"
                    },
                    {
                        "codename": "w5",
                        "model": "LG L70 (unified)",
                        "n_1_0": "false",
                        "n_2_0": "false",
                        "n_2_1": "true",
                        "n_3_0": "false"
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
                        "n_2_1": "true",
                        "n_3_0": "false"
                    },
                    {
                        "codename": "mako",
                        "model": "Nexus 4",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true",
                        "n_3_0": "false"
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
                        "n_2_1": "true",
                        "n_3_0": "false"
                    },
                    {
                        "codename": "oneplus2",
                        "model": "OnePlus Two",
                        "n_1_0": "false",
                        "n_2_0": "false",
                        "n_2_1": "false",
                        "n_3_0": "true"
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
                        "n_2_1": "true",
                        "n_3_0": "true"
                    },
                    {
                        "codename": "n3",
                        "model": "OPPO N3",
                        "n_1_0": "false",
                        "n_2_0": "true",
                        "n_2_1": "true",
                        "n_3_0": "false"
                    },
                    {
                        "codename": "r7plus",
                        "model": "OPPO R7 Plus",
                        "n_1_0": "false",
                        "n_2_0": "false",
                        "n_2_1": "false",
                        "n_3_0": "true"
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
                        "n_2_1": "true",
                        "n_3_0": "false"
                    },
                    {
                        "codename": "i9305",
                        "model": "Samsung Galaxy S3 LTE",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true",
                        "n_3_0": "false"
                    },
                    {
                        "codename": "n7100",
                        "model": "Samsung Note 2",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true",
                        "n_3_0": "false"
                    },
                    {
                        "codename": "t0lte",
                        "model": "Samsung Note 2 LTE",
                        "n_1_0": "true",
                        "n_2_0": "true",
                        "n_2_1": "true",
                        "n_3_0": "false"
                    }
                ]
            },
            {
                "name": "YU",
                "devices": [
                    {
                        "codename": "tomato",
                        "model": "YU Yureka",
                        "n_1_0": "false",
                        "n_2_0": "false",
                        "n_2_1": "true",
                        "n_3_0": "false"
                    }
                ]
            }
        ];
    });

})();
