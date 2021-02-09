# Carddex Intelligent Management System

### CSS

```
    - разделитель смыслонесущих слов (security-post...)
    __ разделение между блоком и элементом (security-post__item)
    -- модификатор (security-post__item--red)
```

При наименовании нового блока возможно применение добавочного слова через `-`
в случае, если наименование блока без добавочного слова может быть уже занято/использовано
либо имеет глобальный смысл
пример:

```html
<aside class="sidebar">
    <div class="sidebar-header">
        <div class="sidebar-header__content">
            <div class="sidebar-header__heading">{props.label}</div>
        </div>

        <div class="sidebar-header__close"></div>
    </div>
    <div class="sidebar-body"></div>
    <div class="sidebar__id"></div>
</aside>
```

### Структура страниц с использование TabBar / Sidebar, Table и Filter

```html
<div class="root">
    <div class="app">
        <div class="wrapper">
            <div class="header"></div>
            <div class="content">
                <div class="side"></div>
                <div class="page">
                    <div class="toolbar"></div>
                    <div class="page__wrapper">
                        <div class="table">
                            <div class="table__content"></div>
                        </div>
                        <div class="sidebar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Redux

#### Правила именования action-ов

Наименование экшна пишется исключительно заглавными буквами, первые две буквы - сокращенное название страницы,
на которой он используется.
Например:

```
Страница StaffDepartments = экшн SD*...
Страница Login = экшн LG*...
```

Далее, идёт тип:
`SET` - для установки значения
`TOGGLE` - для переключения булевого значения

Например:

```
SD_SET_...
LG_TOGGLE_...
```

За типом следует наименование параметра, с которым будет проводиться операция
Например:

```
SD_SET_SELECTED_ROW
LG_TOGGLE_BACKGROUND_LIGHT
```
