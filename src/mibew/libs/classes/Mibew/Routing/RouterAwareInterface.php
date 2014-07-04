<?php
/*
 * Copyright 2005-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Mibew\Routing;

use Symfony\Component\Routing\RouterInterface;

/**
 * An interface for all router aware objects.
 */
interface RouterAwareInterface
{
    /**
     * Sets associated router object.
     *
     * @param RouterInterface $router A router instance.
     */
    public function setRouter(RouterInterface $router);

    /**
     * Gets associated router object.
     *
     * @return RouterInterface A router instance;
     */
    public function getRouter();
}
