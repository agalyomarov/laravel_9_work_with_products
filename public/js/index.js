const formData = document.querySelector(".add-block .add_product_post");
const form_select_menu = document.querySelector(
    ".content .add-block  .input-group.status"
);

const edit_form_select_menu = document.querySelector(
    ".content .edit-block  .input-group.status"
);

const button_add_attr = document.querySelector(".content .add-block .add-attr");
const button_send_product = document.querySelector(
    ".content .button_send_product"
);
const add_block = document.querySelector(".content .add-block");
const show_block = document.querySelector(".content .show-block");
const edit_block = document.querySelector(".content .edit-block");

const font_i_el = `<i class="fa-solid fa-angle-down font-icon"></i>`;

const div_select_menu = document.querySelector(
    ".content .add-block  .select_menu"
);

const edit_div_select_menu = document.querySelector(
    ".content .edit-block  .select_menu"
);

const attr_1 = document.querySelector(".add-block .attr_1");
const attr_2 = document.querySelector(".add-block .attr_2");
const attr_3 = document.querySelector(".add-block .attr_3");

const edit_attr_1 = document.querySelector(".edit-block .attr_1");
const edit_attr_2 = document.querySelector(".edit-block .attr_2");
const edit_attr_3 = document.querySelector(".edit-block .attr_3");

const del_attr_1 = document.querySelector(".add-block .del_attr_1");
const del_attr_2 = document.querySelector(".add-block .del_attr_2");
const del_attr_3 = document.querySelector(".add-block .del_attr_3");

const edit_del_attr_1 = document.querySelector(".edit-block .del_attr_1");
const edit_del_attr_2 = document.querySelector(".edit-block .del_attr_2");
const edit_del_attr_3 = document.querySelector(".edit-block .del_attr_3");

form_select_menu.addEventListener("click", (e) => {
    e.target.style.borderRadius = "5px 5px 0 0 ";
    e.target.querySelector(".font-icon").classList.add("hide");
    div_select_menu.classList.remove("hide");
    document.querySelector("body").addEventListener("click", (event) => {
        if (event.target.className != form_select_menu.className) {
            div_select_menu.classList.add("hide");
            e.target.querySelector(".font-icon").classList.remove("hide");
            e.target.style.borderRadius = "5px";
        }
    });
});

div_select_menu.addEventListener("click", (event) => {
    form_select_menu.innerHTML = event.target.textContent + " " + font_i_el;
    form_select_menu.dataset.status = event.target.dataset.status;
});

button_add_attr.addEventListener("click", (event) => {
    if (attr_1.classList.contains("hide")) {
        attr_1.classList.remove("hide");
        event.target.style.top = "353px";
        button_send_product.style.top = "395px";
        add_block.style.minHeight = "465px";
    } else if (attr_2.classList.contains("hide")) {
        attr_2.classList.remove("hide");
        event.target.style.top = "417px";
        button_send_product.style.top = "459px";
        add_block.style.minHeight = "529px";
    } else if (attr_3.classList.contains("hide")) {
        attr_3.classList.remove("hide");
        event.target.style.top = "482px";
        button_send_product.style.top = "524px";
        add_block.style.minHeight = "594px";
    }
});

del_attr_1.addEventListener("click", () => {
    if (!attr_2.classList.contains("hide") &&
        attr_3.classList.contains("hide")
    ) {
        let data_attr_2 = [];
        attr_2.querySelectorAll("input").forEach((e, i, p) => {
            data_attr_2[i] = e.value;
            e.value = "";
        });
        attr_1.querySelectorAll("input").forEach((el, it, pa) => {
            el.value = data_attr_2[it];
        });

        attr_2.classList.add("hide");
        attr_2.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    } else if (!attr_2.classList.contains("hide") &&
        !attr_3.classList.contains("hide")
    ) {
        let data_attr_2 = [];
        attr_2.querySelectorAll("input").forEach((e, i, p) => {
            data_attr_2[i] = e.value;
            e.value = "";
        });
        attr_1.querySelectorAll("input").forEach((el, it, pa) => {
            el.value = data_attr_2[it];
        });

        let data_attr_3 = [];
        attr_3.querySelectorAll("input").forEach((e, i, p) => {
            data_attr_3[i] = e.value;
            e.value = "";
        });
        attr_2.querySelectorAll("input").forEach((el, it, pa) => {
            el.value = data_attr_3[it];
        });
        attr_3.classList.add("hide");
        attr_3.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    } else {
        attr_1.classList.add("hide");
        attr_1.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    }
    button_add_attr.style.top = parseInt(button_add_attr.style.top) - 64 + "px";
    button_send_product.style.top =
        parseInt(button_send_product.style.top) - 64 + "px";
    add_block.style.minHeight = parseInt(add_block.style.minHeight) - 64 + "px";
});

del_attr_2.addEventListener("click", () => {
    if (!attr_3.classList.contains("hide")) {
        let data_attr_3 = [];
        attr_3.querySelectorAll("input").forEach((e, i, p) => {
            data_attr_3[i] = e.value;
            e.value = "";
        });
        attr_2.querySelectorAll("input").forEach((el, it, pa) => {
            el.value = data_attr_3[it];
        });
        attr_3.classList.add("hide");
        attr_3.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    } else {
        attr_2.classList.add("hide");
        attr_2.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    }
    button_add_attr.style.top = parseInt(button_add_attr.style.top) - 64 + "px";
    button_send_product.style.top =
        parseInt(button_send_product.style.top) - 64 + "px";
    add_block.style.minHeight = parseInt(add_block.style.minHeight) - 64 + "px";
});

del_attr_3.addEventListener("click", () => {
    attr_3.classList.add("hide");
    attr_3.querySelectorAll("input").forEach((e, i, p) => {
        e.value = "";
    });
    button_add_attr.style.top = parseInt(button_add_attr.style.top) - 64 + "px";
    button_send_product.style.top =
        parseInt(button_send_product.style.top) - 64 + "px";
    add_block.style.minHeight = parseInt(add_block.style.minHeight) - 64 + "px";
});

button_send_product.addEventListener("click", () => {
    let data = {};
    if (!attr_1.classList.contains("hide")) {
        data[attr_1.querySelector("[name=attr_name]").value] =
            attr_1.querySelector("[name=attr_value]").value;
    }
    if (!attr_2.classList.contains("hide")) {
        data[attr_2.querySelector("[name=attr_name]").value] =
            attr_2.querySelector("[name=attr_value]").value;
    }
    if (!attr_3.classList.contains("hide")) {
        data[attr_3.querySelector("[name=attr_name]").value] =
            attr_3.querySelector("[name=attr_value]").value;
    }
    formData.insertAdjacentHTML(
        "beforeend",
        `<input class='hide' type="hidden" name="status" value="${form_select_menu.dataset.status}">`
    );

    formData.insertAdjacentHTML(
        "beforeend",
        `<input class='hide' type="hidden" name="data" value='${JSON.stringify(
            data
        )}'>`
    );
    formData.submit();
});

document.querySelector("div.add-button").addEventListener("click", (e) => {
    e.target.classList.add("hide");
    add_block.classList.remove("hide");
});

document
    .querySelector(".add-block .add_block_close")
    .addEventListener("click", (e) => {
        add_block.classList.add("hide");
        document.querySelector("div.add-button").classList.remove("hide");
    });

document
    .querySelector(".content .products")
    .addEventListener("click", async(e) => {
        if (e.target.dataset.id) {
            let id = e.target.dataset.id;
            let data = await fetch(`/${id}`, {
                method: "GET",
            }).then((response) => {
                return response.json();
            });
            data.DATA = JSON.parse(data.DATA);
            let tmp = "";
            for (const [key, value] of Object.entries(data.DATA)) {
                tmp += `${key} : ${value} <br>`;
            }
            show_block.querySelector(".edit_product svg").dataset.id = data.ID;
            data.DATA = tmp;
            // add_block.classList.add("hide");
            show_block.querySelector("h1").textContent = data.NAME;
            show_block.querySelector(".value.article").textContent =
                data.ARTICLE;
            show_block.querySelector(".value.name").textContent = data.NAME;
            show_block.querySelector(".value.status").textContent = data.STATUS;
            show_block.querySelector(".value.attr").innerHTML = data.DATA;
            show_block.querySelector(".delete_product").dataset.id = data.ID;
            show_block.querySelector(".delete_product_svg").dataset.id =
                data.ID;
            show_block.querySelector(".edit_product").dataset.id = data.ID;

            edit_block.classList.add("hide");
            show_block.classList.remove("hide");
        }
    });

document
    .querySelector(".show-block .show_block_close")
    .addEventListener("click", () => {
        show_block.classList.add("hide");
    });

document
    .querySelector(".show-block .delete_product_svg")
    .addEventListener("click", async(e) => {
        let id = document.querySelector(".show-block .delete_product_svg")
            .dataset.id;
        let res = await fetch(`/${id}`, {
            method: "DELETE",
            headers: {
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        }).then((response) => {
            if (response.status === 200) {
                window.location.reload();
            }
        });
    });

document.addEventListener("DOMContentLoaded", function(event) {
    document
        .querySelector(".edit_block_close")
        .addEventListener("click", async(e) => {
            edit_block.classList.add("hide");
        });

    document
        .querySelector(".show-block .edit_product")
        .addEventListener("click", async(e) => {
            let id = e.target.dataset.id;
            let data = await fetch(`/${id}`, {
                method: "GET",
            }).then((response) => {
                return response.json();
            });
            let status_content;
            if (data.STATUS == "available") {
                status_content =
                    'Доступен <i class="fa-solid fa-angle-down font-icon"></i>';
            } else {
                status_content =
                    'Недоступен <i class="fa-solid fa-angle-down font-icon"></i>';
            }
            edit_block.querySelector(".input-group.article").value = data.ARTICLE;
            edit_block.querySelector(".input-group.name").value = data.NAME;
            edit_block.querySelector(".input-group.status").dataset.status = data.STATUS;
            edit_block.querySelector(".input-group.status").innerHTML = status_content;
            edit_block.querySelector(".button_send_product").dataset.id = data.ID;
            let count = 1;
            for (const [key, value] of Object.entries(JSON.parse(data.DATA))) {
                edit_block.querySelector(`.attr_${count} #attr_name`).value =
                    key;
                edit_block.querySelector(`.attr_${count} #attr_value`).value =
                    value;
                edit_block
                    .querySelector(`.attr_${count}`)
                    .classList.remove("hide");

                if (count == 1) {
                    edit_block.querySelector(".add-attr").style.top = "353px";
                    edit_block.querySelector(".button_send_product").style.top =
                        "395px";
                    edit_block.style.minHeight = "465px";
                } else if (count == 2) {
                    edit_block.querySelector(".add-attr").style.top = "417px";
                    edit_block.querySelector(".button_send_product").style.top =
                        "465px";
                    edit_block.style.minHeight = "529px";
                } else if (count == 3) {
                    edit_block.querySelector(".add-attr").style.top = "482px";
                    edit_block.querySelector(".button_send_product").style.top =
                        "524px";
                    edit_block.style.minHeight = "594px";
                }
                count++;
            }
            show_block.classList.add("hide");
            edit_block.classList.remove("hide");
        });
});

edit_block.querySelector(".add-attr").addEventListener("click", (event) => {
    if (edit_attr_1.classList.contains("hide")) {
        edit_attr_1.classList.remove("hide");
        event.target.style.top = "353px";
        edit_block.querySelector(".button_send_product").style.top = "395px";
        edit_block.style.minHeight = "465px";
    } else if (edit_attr_2.classList.contains("hide")) {
        edit_attr_2.classList.remove("hide");
        event.target.style.top = "417px";
        edit_block.querySelector(".button_send_product").style.top = "459px";
        edit_block.style.minHeight = "529px";
    } else if (edit_attr_3.classList.contains("hide")) {
        edit_attr_3.classList.remove("hide");
        event.target.style.top = "482px";
        edit_block.querySelector(".button_send_product").style.top = "524px";
        edit_block.style.minHeight = "594px";
    }
});

//====================================================================================
edit_del_attr_1.addEventListener("click", () => {
    if (!edit_attr_2.classList.contains("hide") &&
        edit_attr_3.classList.contains("hide")
    ) {
        let data_attr_2 = [];
        edit_attr_2.querySelectorAll("input").forEach((e, i, p) => {
            data_attr_2[i] = e.value;
            e.value = "";
        });
        edit_attr_1.querySelectorAll("input").forEach((el, it, pa) => {
            el.value = data_attr_2[it];
        });

        edit_attr_2.classList.add("hide");
        edit_attr_2.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    } else if (!edit_attr_2.classList.contains("hide") &&
        !edit_attr_3.classList.contains("hide")
    ) {
        let data_attr_2 = [];
        edit_attr_2.querySelectorAll("input").forEach((e, i, p) => {
            data_attr_2[i] = e.value;
            e.value = "";
        });
        edit_attr_1.querySelectorAll("input").forEach((el, it, pa) => {
            el.value = data_attr_2[it];
        });

        let data_attr_3 = [];
        edit_attr_3.querySelectorAll("input").forEach((e, i, p) => {
            data_attr_3[i] = e.value;
            e.value = "";
        });
        edit_attr_2.querySelectorAll("input").forEach((el, it, pa) => {
            el.value = data_attr_3[it];
        });
        edit_attr_3.classList.add("hide");
        edit_attr_3.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    } else {
        edit_attr_1.classList.add("hide");
        edit_attr_1.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    }
    edit_block.querySelector(".add-attr").style.top =
        parseInt(edit_block.querySelector(".add-attr").style.top) - 64 + "px";
    edit_block.querySelector(".button_send_product").style.top =
        parseInt(edit_block.querySelector(".button_send_product").style.top) -
        64 +
        "px";
    edit_block.style.minHeight = parseInt(edit_block.style.minHeight) - 64 + "px";
});

edit_del_attr_2.addEventListener("click", () => {
    if (!edit_attr_3.classList.contains("hide")) {
        let data_attr_3 = [];
        edit_attr_3.querySelectorAll("input").forEach((e, i, p) => {
            data_attr_3[i] = e.value;
            e.value = "";
        });
        edit_attr_2.querySelectorAll("input").forEach((el, it, pa) => {
            el.value = data_attr_3[it];
        });
        edit_attr_3.classList.add("hide");
        edit_attr_3.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    } else {
        edit_attr_2.classList.add("hide");
        edit_attr_2.querySelectorAll("input").forEach((e, i, p) => {
            e.value = "";
        });
    }
    edit_block.querySelector(".add-attr").style.top =
        parseInt(edit_block.querySelector(".add-attr").style.top) - 64 + "px";
    edit_block.querySelector(".button_send_product").style.top =
        parseInt(edit_block.querySelector(".button_send_product").style.top) -
        64 +
        "px";
    edit_block.style.minHeight = parseInt(edit_block.style.minHeight) - 64 + "px";
});

edit_del_attr_3.addEventListener("click", () => {
    edit_attr_3.classList.add("hide");
    edit_attr_3.querySelectorAll("input").forEach((e, i, p) => {
        e.value = "";
    });
    edit_block.querySelector(".add-attr").style.top =
        parseInt(edit_block.querySelector(".add-attr").style.top) - 64 + "px";
    edit_block.querySelector(".button_send_product").style.top =
        parseInt(edit_block.querySelector(".button_send_product").style.top) -
        64 +
        "px";
    edit_block.style.minHeight = parseInt(edit_block.style.minHeight) - 64 + "px";
});

edit_form_select_menu.addEventListener("click", (e) => {
    e.target.style.borderRadius = "5px 5px 0 0 ";
    e.target.querySelector(".font-icon").classList.add("hide");
    edit_div_select_menu.classList.remove("hide");
    document.querySelector("body").addEventListener("click", (event) => {
        if (event.target.className != edit_form_select_menu.className) {
            edit_div_select_menu.classList.add("hide");
            e.target.querySelector(".font-icon").classList.remove("hide");
            e.target.style.borderRadius = "5px";
        }
    });
});

edit_div_select_menu.addEventListener("click", (event) => {
    edit_form_select_menu.innerHTML = event.target.textContent + " " + font_i_el;
    edit_form_select_menu.dataset.status = event.target.dataset.status;
});


edit_block.querySelector('.button_send_product').addEventListener("click", (event) => {
    const formData = edit_block.querySelector('.edit_product_post');
    let data = {};
    if (!edit_attr_1.classList.contains("hide")) {
        data[edit_attr_1.querySelector("[name=attr_name]").value] =
            edit_attr_1.querySelector("[name=attr_value]").value;
    }
    if (!edit_attr_2.classList.contains("hide")) {
        data[edit_attr_2.querySelector("[name=attr_name]").value] =
            edit_attr_2.querySelector("[name=attr_value]").value;
    }
    if (!edit_attr_3.classList.contains("hide")) {
        data[edit_attr_3.querySelector("[name=attr_name]").value] =
            edit_attr_3.querySelector("[name=attr_value]").value;
    }
    formData.insertAdjacentHTML(
        "beforeend",
        `<input class='hide' type="hidden" name="status" value="${edit_form_select_menu.dataset.status}">`
    );

    formData.insertAdjacentHTML(
        "beforeend",
        `<input class='hide' type="hidden" name="data" value='${JSON.stringify(data)}'>`
    );

    formData.insertAdjacentHTML(
        "beforeend",
        `<input class='hide' type="hidden" name="id" value="${event.target.dataset.id}">`
    );
    formData.submit();
})