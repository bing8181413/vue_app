export default function(el, binding, vnode) {
  var s = JSON.stringify;
  el.innerHTML = `name:  ${binding.name} <br>
          value:  ${binding.value} <br>
          expression:  ${binding.expression} <br>
          argument:  ${binding.arg} <br>
          rawName:  ${binding.rawName} <br>
          modifiers:  ${JSON.stringify(binding.modifiers)} <br> 
          vnode keys: ${Object.keys(vnode).join(', ')}`;
};
