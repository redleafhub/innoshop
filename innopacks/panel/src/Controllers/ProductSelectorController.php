<?php
/**
 * Copyright (c) Since 2024 InnoShop - All Rights Reserved
 *
 * @link       https://www.innoshop.com
 * @author     InnoShop <team@innoshop.com>
 * @license    https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

<<<<<<<< HEAD:innopacks/restapi/src/PanelApiControllers/DashboardController.php
namespace InnoShop\RestAPI\PanelApiControllers;

use Illuminate\Support\Facades\Auth;

class DashboardController extends BaseController
{
    /**
     * @return mixed
     */
    public function index(): mixed
    {
        return read_json_success(Auth::guard('admin')->user());
========
namespace InnoShop\Panel\Controllers;

class ProductSelectorController extends BaseController
{
    /**
     * Selector page
     *
     * @return mixed
     */
    public function selectorPage(): mixed
    {
        return view('panel::product_selector.index');
>>>>>>>> fix-article:innopacks/panel/src/Controllers/ProductSelectorController.php
    }
}
