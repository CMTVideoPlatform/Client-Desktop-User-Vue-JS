<template>
  <div>
    <h1>Account</h1>
    <ul class="list-unstyled">
      <li>
        <router-link to="/account/email">Email</router-link>
      </li>
      <li>
        <router-link to="/account/password">Password</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
