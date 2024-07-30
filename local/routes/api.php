<?php


require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
[$SECRET_TOKEN, $AUTH_TOKEN] = explode('::', getallheaders()['Authorization']);
if (LABA__API_SECRET_KEY !== md5($SECRET_TOKEN)) {
	http_response_code(401);
	echo json_encode(
		[
			'status' => 401,
			'error'  => 'Unauthorized',
		]);
	die();
}


use Bitrix\Main\Routing\RoutingConfigurator;
use Bitrix\Main\HttpRequest;
use Laba\Rest\Controllers;
use Laba\Rest\Middlewares;

return function (RoutingConfigurator $routes) {
	$routes->prefix(LABA__API_URL)->group(
		function (RoutingConfigurator $routes) {
			$routes->get(
				'test',
				function (HttpRequest $req) {
					return (new Controllers\Order())::test(HLBL_ID_Teeth);
				}
			)->name('laba__test');

			// USER
			$routes->prefix('user')->group(
					function (RoutingConfigurator $routes) {
						// GET LIST
						$routes->get(
							'list',
							function (HttpRequest $req) {
								return (new Controllers\Users())::getListAction(
									(array)$req->getJsonList()->getRaw('FILTER'),
									(int)$req->getJsonList()->getRaw('LIMIT')
								);
							}
						)->name('laba__get_orders_list');

						// CREATE EMPTY
						$routes->post(
							'create',
							function (HttpRequest $req) {
								return (new Controllers\Users())::createAction($req->getJsonList()->getValues());
							}
						)->name('laba__create_empty_order');


						// GET ONE BY ID
						$routes->get(
							'one/{id}',
							fn($id) => (new Controllers\Users())::getByIdAction((int)$id)
						)->name('laba__get_one_by_id');

						// EDIT ONE BY ID
						$routes
							->put(
							'update/{id}',
							fn($id, HttpRequest $req) => (new Controllers\Users())::updateAction((int)$id, (array)$req->getJsonList()->getValues())
						)->name('laba__edit_one_by_id');

						// LOGIN
						$routes->post(
							'login',
							function (HttpRequest $req) {
								return (new Controllers\Users())::loginAction($req->getJsonList()->getValues());
							}
						)->name('laba__user_login');
					}
				);

			// ORDERS
			$routes
				->prefix('orders')->group(
				function (RoutingConfigurator $routes) {
					// GET LIST
					$routes->get(
						'list',
						function (HttpRequest $req) {
							return (new Controllers\Order())::getListAction(
								(array)$req->getJsonList()->getRaw('FILTER'),
								(int)$req->getJsonList()->getRaw('LIMIT')
							);
						}
					)->name('laba__get_orders_list');

					// CREATE EMPTY
					$routes->post(
						'create',
						function (HttpRequest $req) {
							return (new Controllers\Order())::createAction($req->getJsonList()->getValues());
						}
					)->name('laba__create_empty_order');


					// GET ONE BY ID
					$routes->get(
						'one/{id}',
						fn($id) => (new Controllers\Order())::getByIdAction((int)$id)
					)->name('laba__get_one_by_id_order');

					// EDIT ONE BY ID
					$routes->put(
						'update/{id}',
						fn($id, HttpRequest $req) => (new Controllers\Order())::updateAction((int)$id, (array)$req->getJsonList()->getValues())
					)->name('laba__edit_one_by_id_order');
				}
			);


			// ORGANIZATION
			$routes
				->prefix('organization')->group(
				function (RoutingConfigurator $routes) {
					// GET LIST
					$routes->get(
						'list',
						function (HttpRequest $req) {
							return (new Controllers\Organization())::getListAction(
								(array)$req->getJsonList()->getRaw('FILTER'),
								(int)$req->getJsonList()->getRaw('LIMIT')
							);
						}
					)->name('laba__get_organizations_list');

					// CREATE EMPTY
					$routes->post(
						'create',
						function (HttpRequest $req) {
							return (new Controllers\Organization())::createAction($req->getJsonList()->getValues());
						}
					)->name('laba__create_empty_organization');


					// GET ONE BY ID
					$routes->get(
						'one/{id}',
						fn($id) => (new Controllers\Organization())::getByIdAction((int)$id)
					)->name('laba__get_one_by_id_organization');

					// EDIT ONE BY ID
					$routes->post(
						'update/{id}',
						fn($id, HttpRequest $req) => (new Controllers\Organization())::updateAction(
							(int)$id, array_merge(
							$req->getJsonList()->getValues(), $req->getFileList()->getValues()))
					)->name('laba__edit_one_by_id_organization');
				}
			);


			// BANKS
			$routes
				->prefix('banks')->group(
				function (RoutingConfigurator $routes) {
					// GET LIST
					$routes->get(
						'list',
						function (HttpRequest $req) {
							return (new Controllers\Banks())::getListAction(
								(array)$req->getJsonList()->getRaw('FILTER'),
								(int)$req->getJsonList()->getRaw('LIMIT')
							);
						}
					)->name('laba__get_banks_list');

					// CREATE EMPTY
					$routes->post(
						'create',
						function (HttpRequest $req) {
							return (new Controllers\Banks())::createAction($req->getJsonList()->getValues());
						}
					)->name('laba__create_bank');


					// GET ONE BY ID
					$routes->get(
						'one/{id}',
						fn($id) => (new Controllers\Banks())::getByIdAction((int)$id)
					)->name('laba__get_one_by_id_bank');

					// EDIT ONE BY ID
					$routes->put(
						'update/{id}',
						fn($id, HttpRequest $req) => (new Controllers\Banks())::updateAction((int)$id, (array)$req->getJsonList()->getValues())
					)->name('laba__edit_one_by_id_bank');
				}
			);


			// TASKS
			$routes
				->prefix('tasks')->group(
				function (RoutingConfigurator $routes) {
					// GET LIST
					$routes->get(
						'list',
						function (HttpRequest $req) {
							return (new Controllers\Tasks())::getListAction(
								(array)$req->getJsonList()->getRaw('FILTER'),
								(int)$req->getJsonList()->getRaw('LIMIT')
							);
						}
					)->name('laba__get_tasks_list');

					// CREATE EMPTY
					$routes->post(
						'create',
						function (HttpRequest $req) {
							return (new Controllers\Tasks())::createAction($req->getJsonList()->getValues());
						}
					)->name('laba__create_bank');


					// GET ONE BY ID
					$routes->get(
						'one/{id}',
						fn($id) => (new Controllers\Tasks())::getByIdAction((int)$id)
					)->name('laba__get_one_by_id_tasks');

					// EDIT ONE BY ID
					$routes->put(
						'update/{id}',
						fn($id, HttpRequest $req) => (new Controllers\Tasks())::updateAction((int)$id, (array)$req->getJsonList()->getValues())
					)->name('laba__edit_one_by_id_tasks');
				}
			);

			// TEETH
			$routes
				->prefix('teeth')->group(
				function (RoutingConfigurator $routes) {
					// GET ONE BY ID
					$routes->get(
						'one/{id}',
						fn($id) => (new Controllers\Teeth())::getByIdAction((int)$id)
					)->name('laba__get_one_by_id_teeth');

					// GET LIST
					$routes->get(
						'list',
						function (HttpRequest $req) {
							return (new Controllers\Teeth())::getListAction(
								(array)$req->getJsonList()->getRaw('FILTER'),
								(int)$req->getJsonList()->getRaw('LIMIT')
							);
						}
					)->name('laba__get_teeth');


					// GET SECTIONS LIST
					$routes->get(
						'sections_list',
						function (HttpRequest $req) {
							return (new Controllers\Teeth())::getSectionsListAction();
						}
					)->name('laba__get_teeth');
				}
			);
		}
	);
};
